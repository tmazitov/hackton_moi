-- +goose Up
-- +goose StatementBegin

INSERT INTO guides
  ( name )
VALUES
  ('Pay traffic fine by Emirates ID'), 
  ('Pay traffic fine by License number'), 
  ('Pay traffic fine by TC number'),
  ('Renew the car registration'), 
  ('Update car insurance '),
  ('Show car profile'),
  ('Show car insurance status');

-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
-- +goose StatementEnd
