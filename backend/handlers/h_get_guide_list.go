package handlers

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/securisec/go-keywords"
	"github.com/tmazitov/hackton_moi/models"
	"github.com/tmazitov/hackton_moi/rating"
	"github.com/tmazitov/hackton_moi/storage"
	"github.com/tmazitov/service"
)

type GetGuideListParams struct {
	Search string `json:"search" binding:"required"`
}
type GetGuideListHandler struct {
	storage *storage.Storage
	service.HandlerCoreBehavior[
		GetGuideListParams,
		[]*models.Guide,
	]
}

func (h *GetGuideListHandler) Handle(ctx *gin.Context) {

	var (
		err          error
		kw           []string
		guides       []*models.Guide
		guidesRating rating.GuideRating
		search       string = h.Input.Search
	)

	if search == "" {
		ctx.JSON(400, gin.H{"error": "search query parameter is required"})
		return
	}

	kw, err = keywords.Extract(search)
	if err != nil {
		ctx.JSON(500, gin.H{"error": err.Error()})
		return
	}

	fmt.Println("Keywords: ", kw)

	if len(kw) == 0 {
		ctx.JSON(400, gin.H{"error": "no keywords"})
		return
	}

	if guides, err = h.storage.GetGuidesByKeywords(ctx, kw); err != nil {
		ctx.JSON(400, gin.H{"error": err.Error()})
		return
	}

	guidesRating = rating.Calculate(kw, guides)
	h.Output = rating.TopList(guidesRating)
}
