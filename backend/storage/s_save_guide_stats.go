package storage

import (
	"context"
	"database/sql"

	"github.com/tmazitov/hahaton_moi/models"
)

func (s *Storage) SaveGuideStatistic(ctx context.Context, record *models.StatisticRecord) error {
	var err error = s.db.NewInsert().
		Model(record).
		Scan(ctx)

	if err == sql.ErrNoRows {
		return nil
	}

	return err
}
