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

func newMember(firstname, lastname, email string) Member {
	//generate ID and check to make sure it isn't taken
	return Member{
		ID:        "sjfjfsjsjsdfjk",
		FirstName: firstname,
		LastName:  lastname,
		Email:     email,
		CreatedAt: time.Now(),
	}
}

//needs to check the database to make sure the id isn't take
//func generateID() string {}
