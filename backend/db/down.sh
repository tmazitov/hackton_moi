DRIVER="postgres"
DATABASE_URL="postgresql://test_client:test_client@localhost:5432/test_db?sslmode=disable"

goose -dir db/migrations $DRIVER $DATABASE_URL down