package member

import (
	"time"
)

// Member module
type Member struct {
	ID        string    `json:"ID"`
	FirstName string    `json:"firstName"`
	LastName  string    `json:"lastName"`
	Email     string    `json:"email"`
	CreatedAt time.Time `json:"createdAt"`
}

func newMember() Member {
	//generate ID and check to make sure it isn't taken
	return Member{
		ID:        "default",
		CreatedAt: time.Now(),
	}
}

//needs to check the database to make sure the id isn't take
//func generateID() string {}
