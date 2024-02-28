# Counting number block

## Hooks

If you wish to write custom JavaScript for the counting functionality, you can unset the script using the following PHP filter.

```PHP
add_filter( 'block_type_metadata', function($metadata) {
    if($metadata["name"] == "yard/counting-number") {
        unset($metadata["viewScript"]);
    }
    return $metadata;
} );
```
