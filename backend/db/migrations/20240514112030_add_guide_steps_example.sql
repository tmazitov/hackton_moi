-- +goose Up
-- +goose StatementBegin
INSERT INTO steps
	( message, button_id )
VALUES
	( 'Press on this button-1', 'button-1'), 
	( 'Press on this button-2', 'button-2'), 
	( 'Press on this button-3', 'button-3'), 
	( 'Press on this button-4', 'button-4'), 
	( 'Press on this button-5', 'button-5'), 
	( 'Press on this button-6', 'button-6');

INSERT INTO guide_steps
	( guide_id, step_id )
VALUES 
	( 1 , 1 ),
	( 1 , 2 ),
	( 1 , 3 ),
	( 1 , 4 ),
	( 1 , 5 ),
	( 1 , 6 );

-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
-- +goose StatementEnd
