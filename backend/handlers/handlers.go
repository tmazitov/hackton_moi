package handlers

import "github.com/tmazitov/service"

func Endpoints() []service.Endpoint {
	return []service.Endpoint{
		// {Method: "GET", Path: "/__/list", Handler: Get__ListHandler}
		// {Method: "GET", Path: "/__", Handler: Get__Handler}
		// {Method: "GET", Path: "/__/stats", Handler: Get__StatsHandler}
	}
}
