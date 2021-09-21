package data

import (
	"time"
)

// Member model
type Member struct {
	ID        string    `json:"ID"`
	FirstName string    `json:"firstName"`
	LastName  string    `json:"lastName"`
	Email     string    `json:"email"`
	CreatedAt time.Time `json:"createdAt"`
}
