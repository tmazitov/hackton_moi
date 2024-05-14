-- +goose Up
-- +goose StatementBegin

INSERT INTO guides
  ( name )
VALUES
  ('Test guide one'), 
  ('Test guide two'), 
  ('Test guide three'),
  ('Pay some bill'),
  ('Pay some thing another'),
  ('Test guide last one!');

-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
-- +goose StatementEnd
