package models

type Step struct {
	ID       int    `json:"id"`
	Message  string `json:"message"`
	ButtonId int    `json:"button_id"`
}
