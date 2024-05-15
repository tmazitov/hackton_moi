package storage

import (
	"context"

	"github.com/lib/pq"
	"github.com/tmazitov/hackton_moi/models"
)

func guideStepsToArray(guideSteps []*models.GuideStep) []int {
	var stepIds []int

	for _, model := range guideSteps {
		stepIds = append(stepIds, model.StepID)
	}
	return stepIds
}

func (s *Storage) GetGuideSteps(ctx context.Context, guideId int) ([]*models.Step, error) {
	var (
		guideSteps []*models.GuideStep
		stepIds    []int
		steps      []*models.Step
		err        error
	)

	err = s.db.NewSelect().
		Model(&guideSteps).
		Where("guide_id = ?", guideId).
		Scan(ctx)
	if err != nil {
		return nil, err
	}

	stepIds = guideStepsToArray(guideSteps)

	err = s.db.NewSelect().
		Model(&steps).
		Where("id = ANY(?)", pq.Array(stepIds)).
		Scan(ctx)
	if err != nil {
		return nil, err
	}

	return steps, nil
}
