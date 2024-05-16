-- +goose Up
-- +goose StatementBegin

INSERT INTO guides
  ( name )
VALUES
  ('Pay traffic fine with TC number'), 
  ('Pay traffic fine with License number'), 
  ('Pay traffic fine with Emirates ID'),
  ('Renew the car registration'), 
  ('Update car insurance '),
  ('Show car profile'),
  ('Show car insurance status');

-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
-- +goose StatementEnd
