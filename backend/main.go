package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type book struct {
	ID    string `json:"id"`
	Name  string `json:"name"`
	Issue int64  `json:"issue"`
	Need  bool   `json:"need"`
	Have  bool   `json:"have"`
}

var books = []book{
	{ID: "1", Name: "Doom", Issue: 1},
	{ID: "2", Name: "Spiderman", Issue: 1},
}

func getBooks(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, books)
}

func getBooksByName(c *gin.Context) {
	name := c.Query("name")

	var results = []book{}
	var none_found = true

	for _, a := range books {
		if a.Name == name {
			results = append(results, a)
			none_found = false
		}
	}
	if none_found {
		c.IndentedJSON(http.StatusNotFound, gin.H{"message": "log not found"})
	} else {
		c.IndentedJSON(http.StatusOK, results)
	}
}

func getBookByID(c *gin.Context) {
	id := c.Param("id")

	// Loop over the list of albums, looking for
	// an album whose ID value matches the parameter.
	for _, a := range books {
		if a.ID == id {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "log not found"})
}

func postBooks(c *gin.Context) {
	var newBook book

	if err := c.BindJSON(&newBook); err != nil {
		return
	}

	books = append(books, newBook)
	c.IndentedJSON(http.StatusCreated, newBook)
}

func main() {
	r := gin.Default()
	r.GET("/books", getBooks)
	r.GET("books/:id", getBookByID)
	r.GET("books/names/:name", getBooksByName)
	r.POST("/books", postBooks)

	r.Run()
}
