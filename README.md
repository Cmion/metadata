# Metadata API

## APIs

### Countries

```bash
    curl 'http://localhost:3000/api/v1/countries'
```
Query based on id or country code
see [https://github.com/typicode/json-server#filter](JSON-SERVER) for sort parameters
```bash
    curl 'http://localhost:3000/api/v1/countries/bj'
```
#### Countries Response Example
```json
[
    {
        "timezones": [
            "Africa/Porto-Novo"
        ],
        "lat": 9.5,
        "lng": 2.25,
        "id": "bj",
        "iso2": "BJ",
        "iso3": "BEN",
        "unicode": "🇧🇯",
        "currency": "XOF",
        "capital": "Porto-Novo",
        "continent": "AF",
        "name": "Benin",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg",
        "dialing_code": "+229",
        "native_name": "Bénin",
        "languages": [
            "fr"
        ]
    }
]

```

### Cities

```bash
    curl 'http://localhost:3000/api/v1/cities'
```

Query based on id or country code
see [https://github.com/typicode/json-server#filter](JSON-SERVER) for sort parameters
```bash
    curl 'http://localhost:3000/api/v1/cities/ng'
```
