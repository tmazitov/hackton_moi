package handlers

import (
	"github.com/tmazitov/hackton_moi/stats"
	"github.com/tmazitov/hackton_moi/storage"
	"github.com/tmazitov/service"
)

func Endpoints(statsSaver *stats.StatsSaver, store *storage.Storage) []service.Endpoint {

	return []service.Endpoint{
		{Method: "POST", Path: "/guide/list", Handler: &GetGuideListHandler{storage: store}},
		{Method: "GET", Path: "/guide", Handler: &GetGuideHandler{
			storage:    store,
			statsSaver: statsSaver,
		}},
		// {Method: "GET", Path: "/__/stats", Handler: Get__StatsHandler}
	}
}
