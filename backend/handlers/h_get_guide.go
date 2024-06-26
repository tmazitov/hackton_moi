package handlers

import (
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/tmazitov/hackton_moi/models"
	"github.com/tmazitov/hackton_moi/stats"
	"github.com/tmazitov/hackton_moi/storage"
	"github.com/tmazitov/service"
)

type GetGuideHandler struct {
	storage    *storage.Storage
	statsSaver *stats.StatsSaver
	service.HandlerMonoWriteBehavior[[]*models.Step]
}

func getGuideId(ctx *gin.Context) (int, error) {
	var (
		guideParam string
		ok         bool
	)

	if guideParam, ok = ctx.Params.Get("guideId"); !ok || guideParam == "" {
		return 0, ErrInvalidParams
	}

	return strconv.Atoi(guideParam)
}

func (h *GetGuideHandler) Handle(ctx *gin.Context) {
	var (
		err     error
		guideId int
		search  string = ctx.Query("search")
	)

	if guideId, err = getGuideId(ctx); err != nil {
		ctx.JSON(400, gin.H{"error": err.Error()})
		return
	}

	if h.Output, err = h.storage.GetGuideSteps(ctx, guideId); err != nil {
		ctx.JSON(500, gin.H{"error": err.Error()})
		return
	}

	h.statsSaver.RecordChan <- &models.StatisticRecord{
		Search:  search,
		GuideId: guideId,
	}
}
