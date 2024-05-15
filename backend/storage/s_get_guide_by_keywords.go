package storage

import (
	"context"
	"fmt"

	"github.com/lib/pq"
	"github.com/tmazitov/hackton_moi/models"
)

func (s *Storage) GetGuidesByKeywords(ctx context.Context, keywords []string) ([]*models.Guide, error) {
	var guides []*models.Guide
	var keywordsTemplate []string = []string{}

	for _, keyword := range keywords {
		keywordsTemplate = append(keywordsTemplate, fmt.Sprintf("%%%s%%", keyword))
	}

	err := s.db.NewSelect().
		Model(&guides).
		Where("LOWER(name) LIKE ANY(?)", pq.Array(keywordsTemplate)).
		Scan(ctx)

	if err != nil {
		return nil, err
	}

	return guides, nil
}
