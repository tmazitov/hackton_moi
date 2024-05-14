package handlers

import (
	"github.com/tmazitov/hahaton_moi/storage"
	"github.com/tmazitov/service"
)

func Endpoints(store *storage.Storage) []service.Endpoint {
	return []service.Endpoint{
		{Method: "GET", Path: "/guide/list", Handler: &GetGuideListHandler{storage: store}},
		{Method: "GET", Path: "/guide/:guideId", Handler: &GetGuideHandler{storage: store}},
		// {Method: "GET", Path: "/__/stats", Handler: Get__StatsHandler}
	}
}
