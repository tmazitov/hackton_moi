package rating

import (
	"fmt"
	"sort"
	"strings"

	"github.com/tmazitov/hackton_moi/models"
)

type GuideRatingElem struct {
	Guide *models.Guide
	Value int
}

type GuideRating []GuideRatingElem

func Calculate(keywords []string, guides []*models.Guide) GuideRating {
	var ratings GuideRating = GuideRating{}

	// Iterate over each message
	for _, guide := range guides {
		rating := 0
		// Iterate over each keyword
		for _, keyword := range keywords {
			// Check if the keyword is present in the message
			if strings.Contains(strings.ToLower(guide.Name), keyword) {
				rating++
			}
		}
		fmt.Printf("Guide '%s' : rating : %d\n", guide.Name, rating)
		// Store the rating for the message
		ratings = append(ratings, GuideRatingElem{Guide: guide, Value: rating})
	}

	return ratings
}

func Max(r GuideRating) int {
	var max int

	for _, rating := range r {
		if rating.Value > max {
			max = rating.Value
		}
	}
	return max
}

func Length(r GuideRating) int {
	var len int = 0

	for _, _ = range r {
		len++
	}
	return len
}

func TopList(r GuideRating) []*models.Guide {

	var (
		topResults   []*models.Guide = []*models.Guide{}
		ratingLength int             = Length(r)
	)

	fmt.Println("length : %d\n", ratingLength)
	if ratingLength == 0 {
		return topResults
	}

	// Sort the messages based on their ratings
	var sortedGuides GuideRating = GuideRating{}
	for _, elem := range r {
		// fmt.Printf("Guide '%s' : rating : %d\n", elem.Guide.Name, elem.Value)
		if elem.Value == 0 {
			continue
		}
		sortedGuides = append(sortedGuides, elem)
	}
	sort.Slice(sortedGuides, func(i, j int) bool {
		return sortedGuides[i].Value > sortedGuides[j].Value
	})

	if Length(sortedGuides) == 0 {
		return topResults
	}

	// Select only the top four results
	var count int = 0

	if sortedGuides[0].Value == 1 {
		for count < ratingLength && count < 4 && sortedGuides[count].Value > 0 {
			topResults = append(topResults, sortedGuides[count].Guide)
			count++
		}
		return topResults
	} else if sortedGuides[count].Value == 0 {
		return topResults
	}

	for count < ratingLength && count < 4 && sortedGuides[count].Value > 1 {
		topResults = append(topResults, sortedGuides[count].Guide)
		count++
	}

	return topResults
}
