package models

import "github.com/uptrace/bun"

type Guide struct {
	bun.BaseModel `bun:"table:guides"`
	ID            int    `json:"id" bun:"id,pk,autoincrement"`
	Name          string `json:"name" bun:"name,notnull"`
}
