package main

import (
	"flag"
	"fmt"
	"log"

	"github.com/karan/vocabulary"
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

	// var (
	// 	s *service.Service = service.NewService(&service.ServiceConfig{
	// 		Port:    5050,
	// 		Name:    "moi",
	// 		Prefix:  "moi",
	// 		Version: "v0",
	// 	})
	// 	store      *storage.Storage
	// 	statsSaver *stats.StatsSaver
	// 	config     *Config = setupFlags()
	// )

	// store = storage.NewStorage(config.StorageURL)

	// statsSaver = stats.NewStatsSaver(store)
	// defer statsSaver.Close()

	// s.SetupHandlers(handlers.Endpoints(statsSaver, store))
	// go statsSaver.Run()
	// s.Start()

	// Instantiate a Vocabulary object with your config
	v, err := vocabulary.New(&vocabulary.Config{BigHugeLabsApiKey: "xxx", WordnikApiKey: "xxxx"})
	if err != nil {
		log.Fatal(err)
	}

	// Create a new vocabulary.Word object, and collects all possible information.
	word, err := v.Word("vuvuzela")
	if err != nil {
		log.Fatal(err)
	}

	// fmt.Printf("word.Word = %s \n", word.Word)
	// fmt.Printf("word.Meanings = %s \n", word.Meanings)
	fmt.Printf("word.Synonyms = %s \n", word.Synonyms)
	// fmt.Printf("word.Antonyms = %s \n", word.Antonyms)
	// fmt.Printf("word.PartOfSpeech = %s \n", word.PartOfSpeech)
	// fmt.Printf("word.UsageExample = %s \n", word.UsageExample)
}
