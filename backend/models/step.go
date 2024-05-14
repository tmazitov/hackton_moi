package models

import "github.com/uptrace/bun"

type GuideStep struct {
	bun.BaseModel `bun:"table:guide_steps"`
	ID            int `json:"id" bun:"id,pk,autoincrement"`
	GuideID       int `json:"guide_id" bun:"guide_id,notnull"`
	StepID        int `json:"step_id" bun:"step_id,notnull"`
}

type Step struct {
	bun.BaseModel `bun:"table:steps"`
	ID            int    `json:"id" bun:"id,pk,autoincrement"`
	Message       string `json:"message" bun:"message,notnull"`
	ButtonId      string `json:"button_id" bun:"button_id,notnull"`
}
