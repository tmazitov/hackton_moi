package storage

import (
	"context"

	"github.com/tmazitov/hackton_moi/models"
)

func (s *Storage) GetGuideList(ctx context.Context, search string) ([]*models.Guide, error) {
	var guides []*models.Guide

	err := s.db.NewSelect().
		Model(&guides).
		Where("POSITION(LOWER(?) IN LOWER(name))>0", search).
		Scan(ctx)
	if err != nil {
		return nil, err
	}

	return guides, nil
}
