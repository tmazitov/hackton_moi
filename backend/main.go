package main

import (
	"flag"

	"github.com/tmazitov/hackton_moi/handlers"
	"github.com/tmazitov/hackton_moi/stats"
	"github.com/tmazitov/hackton_moi/storage"
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
		store      *storage.Storage
		statsSaver *stats.StatsSaver
		config     *Config = setupFlags()
	)

	store = storage.NewStorage(config.StorageURL)

	statsSaver = stats.NewStatsSaver(store)
	defer statsSaver.Close()

	s.SetupHandlers(handlers.Endpoints(statsSaver, store))
	go statsSaver.Run()
	s.Start()
}
