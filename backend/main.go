package main

import (
	"flag"

	"github.com/tmazitov/hahaton_moi/handlers"
	"github.com/tmazitov/hahaton_moi/storage"
	"github.com/tmazitov/service"
)

type Config struct {
	StorageURL string
}

func setupFlags() *Config {
	var config *Config = &Config{}
	flag.StringVar(&config.StorageURL, "db_url", "postgres://postgres:postgres@localhost:5432/postgres", "Database URL")

	flag.Parse()
	return config
}

func main() {

	var (
		s *service.Service = service.NewService(&service.ServiceConfig{
			Port:    5050,
			Name:    "moi",
			Prefix:  "moi",
			Version: "v0",
		})
		store  *storage.Storage
		config *Config = setupFlags()
	)

	store = storage.NewStorage(config.StorageURL)

	s.SetupHandlers(handlers.Endpoints(store))
	s.Start()
}
