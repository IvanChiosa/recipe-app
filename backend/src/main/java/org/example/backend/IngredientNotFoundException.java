package org.example.backend;

public class IngredientNotFoundException extends Exception {
    public IngredientNotFoundException() {
    }

    public IngredientNotFoundException(String message) {
        super(message);
    }
}
