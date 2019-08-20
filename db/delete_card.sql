DELETE FROM mtg_cards
WHERE card_id = $1 AND deck_id = $2;