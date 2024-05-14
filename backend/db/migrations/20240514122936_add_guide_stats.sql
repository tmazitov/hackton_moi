-- +goose Up
-- +goose StatementBegin
CREATE TABLE IF NOT EXISTS guide_stats (
	id 			INT GENERATED ALWAYS AS IDENTITY UNIQUE,
	guide_id	INT,
	search		VARCHAR(255)
);

ALTER TABLE guide_stats 
	ADD CONSTRAINT guide_stats_guide_id_fk
	FOREIGN KEY (guide_id) REFERENCES guides(id);

-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE guide_stats;
-- +goose StatementEnd
