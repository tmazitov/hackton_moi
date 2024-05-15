package handlers

import (
	"github.com/gin-gonic/gin"
	"github.com/tmazitov/hackton_moi/models"
	"github.com/tmazitov/hackton_moi/storage"
	"github.com/tmazitov/service"
)

type GetGuideListHandler struct {
	storage *storage.Storage
	service.HandlerMonoWriteBehavior[[]*models.Guide]
}

func (h *GetGuideListHandler) Handle(ctx *gin.Context) {

	var (
		search string = ctx.Query("search")
		err    error
	)

	if h.Output, err = h.storage.GetGuideList(ctx, search); err != nil {
		ctx.JSON(500, gin.H{"error": err.Error()})
		return
	}
}
