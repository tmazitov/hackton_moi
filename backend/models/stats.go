package models

import "github.com/uptrace/bun"

type StatisticRecord struct {
	bun.BaseModel `bun:"table:guide_stats"`
	GuideId       int    `json:"guideId" bun:"guide_id,notnull"`
	Search        string `json:"name" bun:"search,notnull"`
}
