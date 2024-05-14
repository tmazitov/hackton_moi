package storage

import (
	"database/sql"

	"github.com/uptrace/bun"
	"github.com/uptrace/bun/dialect/pgdialect"
	"github.com/uptrace/bun/driver/pgdriver"
)

type Storage struct {
	db *bun.DB
}

func NewStorage(url string) *Storage {
	return &Storage{
		db: bun.NewDB(
			sql.OpenDB(pgdriver.NewConnector(pgdriver.WithDSN(url))),
			pgdialect.New(),
		),
	}
}
