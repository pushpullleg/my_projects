# LeetCode API Python Script: Learning & Troubleshooting Guide

## Purpose
This guide documents the process of building a Python script to fetch and display the last 5 LeetCode submission activities for a user, including the problems faced and solutions applied. It is intended as a revision and learning material.

---

## What You Built
- A Python script that uses the `requests` library to fetch profile and submission data from the LeetCode API for a given username.
- The script prints the last 5 activities, showing problem name, status, language, and submission time in a readable format.

---

## Key Questions & Problems Faced

### 1. How to fetch data from an API in Python?
- Used the `requests` library to make HTTP GET requests.
- Example: `requests.get(url)`

### 2. What if `requests` is not installed?
- Error: `Import "requests" could not be resolved from source`
- Solution: Install with `pip install requests` or use the environment's package installer.

### 3. Why does my script still not find `requests` after installing?
- Possible cause: Wrong Python interpreter/environment selected.
- Solution: Configure the correct Python environment (e.g., a virtual environment) and use its Python executable.

### 4. How to parse API response data?
- Used `.json()` to parse the response.
- For submissions, the API returned a list, not a dictionary.
- Error: `AttributeError: 'list' object has no attribute 'get'`
- Solution: Use the list directly, e.g., `for sub in submissions[:5]: ...`

### 5. How to convert Unix timestamps to readable dates?
- Used `datetime.fromtimestamp()`.
- Error: `TypeError: 'str' object cannot be interpreted as an integer`
- Solution: Convert the timestamp string to integer first: `int(ts)`
- Final code:
  ```python
  ts_int = int(ts)
  ts_str = datetime.fromtimestamp(ts_int).strftime('%Y-%m-%d %I:%M:%S %p')
  ```

### 6. How to format time in AM/PM?
- Used `%I:%M:%S %p` in `strftime` for 12-hour format with AM/PM.

---

## Final Script Features
- Fetches and prints profile stats.
- Fetches and prints last 5 submission activities with readable timestamps.
- Handles errors and API response formats robustly.

---

## Example Output
```
Last 5 Activities:
- Maximum Average Subarray I | 10 | python3 | 2025-09-08 11:02:04 AM
- Intersection of Two Arrays | 10 | java | 2025-09-02 10:25:26 AM
- Single Number | 10 | java | 2025-08-30 12:28:26 PM
- Valid Anagram | 10 | java | 2025-08-06 01:29:07 PM
- Valid Anagram | 11 | java | 2025-08-06 12:58:56 PM
```

---

## Revision Checklist
- [x] Install and use Python packages
- [x] Configure Python environments in VS Code
- [x] Make API requests and handle responses
- [x] Parse JSON data
- [x] Handle lists vs. dictionaries in API responses
- [x] Convert and format timestamps
- [x] Debug and fix common Python errors

---

## Tips for Future Projects
- Always check your Python environment and interpreter.
- Read API documentation to understand response formats.
- Use try/except for robust error handling.
- Document your process and solutions for future reference.

---

Happy coding and revising!
