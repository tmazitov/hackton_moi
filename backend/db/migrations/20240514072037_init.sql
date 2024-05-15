-- +goose Up
-- +goose StatementBegin

CREATE TABLE IF NOT EXISTS steps (
	id 			INT GENERATED ALWAYS AS IDENTITY UNIQUE,
	message		VARCHAR(255) NOT NULL,
	button_id	VARCHAR(255) NOT NULL,
	created_at	TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS guides (
	id 			INT GENERATED ALWAYS AS IDENTITY UNIQUE,
	name		VARCHAR(255) NOT NULL,
	created_at	TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS guide_steps (
	id 			INT GENERATED ALWAYS AS IDENTITY UNIQUE,
	guide_id	INT,
	step_id		INT,
	UNIQUE (guide_id, step_id)
);

ALTER TABLE guide_steps 
	ADD CONSTRAINT guide_steps_guide_id_fk
	FOREIGN KEY (guide_id) REFERENCES guides(id);

ALTER TABLE guide_steps 
	ADD CONSTRAINT guide_steps_step_id_fk
	FOREIGN KEY (step_id) REFERENCES steps(id);

-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS guide_steps;
DROP TABLE IF EXISTS steps;
DROP TABLE IF EXISTS guides;
-- +goose StatementEnd
