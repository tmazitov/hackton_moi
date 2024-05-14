URL="postgresql://test_client:test_client@localhost:5432/test_db?sslmode=disable"

go build -o moi_service . && ./moi_service \
	-db_url $URL