# Counting number block

## Hooks

If you want to write custom javascript voor the counting, you can unset the script with the following PHP filter.

```PHP
add_filter( 'block_type_metadata', function($metadata) {
    if($metadata["name"] == "yard-gutenberg/counting-number") {
        unset($metadata["viewScript"]);
    }
    return $metadata;
} );
```
