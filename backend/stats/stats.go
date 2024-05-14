package stats

import (
	"context"
	"log"

	"github.com/tmazitov/hahaton_moi/models"
	"github.com/tmazitov/hahaton_moi/storage"
)

type StatsSaver struct {
	RecordChan chan *models.StatisticRecord
	QuitChan   chan int
	Storage    *storage.Storage
}

func NewStatsSaver(storage *storage.Storage) *StatsSaver {
	return &StatsSaver{
		RecordChan: make(chan *models.StatisticRecord),
		QuitChan:   make(chan int),
		Storage:    storage,
	}
}

func (s *StatsSaver) Close() {
	s.QuitChan <- 1
}

func (s *StatsSaver) save(ctx context.Context, record *models.StatisticRecord) {
	if err := s.Storage.SaveGuideStatistic(ctx, record); err != nil {
		log.Printf("save guide stats failed : %s\n", err.Error())
	}
}

func (s *StatsSaver) Run() {
	var (
		record *models.StatisticRecord
		ctx    context.Context = context.Background()
	)

	for {
		select {
		case record = <-s.RecordChan:
			s.save(ctx, record)
		case <-s.QuitChan:
			ctx.Done()
			return
		}
	}
}
