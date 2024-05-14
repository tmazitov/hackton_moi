package main

import (
	"github.com/tmazitov/hahaton_moi/handlers"
	"github.com/tmazitov/service"
)

func main() {
	var (
		s *service.Service = service.NewService(&service.ServiceConfig{
			Port:    5050,
			Name:    "moi",
			Prefix:  "moi",
			Version: "v0",
		})
	)

	s.SetupHandlers(handlers.Endpoints())
	s.Start()
}
