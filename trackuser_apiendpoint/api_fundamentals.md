# Python API Integration: Fundamental Concepts & Step-by-Step Guide

## Introduction
This document explains the fundamental concepts behind building a Python program that interacts with a web API, using the LeetCode submissions tracker as a practical example. It is designed to help you understand each step and gain the confidence to create similar programs on your own.

---

## 1. What is an API?
- **API (Application Programming Interface)**: A set of rules that allows one software application to interact with another.
- **Web API**: Lets you access data or services over the internet using HTTP requests.

---

## 2. Making HTTP Requests in Python
- Use the `requests` library to send HTTP requests (GET, POST, etc.).
- **GET Request**: Used to fetch data from a server.
- Example:
  ```python
  import requests
  response = requests.get('https://example.com/api')
  ```

---

## 3. Parsing JSON Data
- Most APIs return data in JSON format (JavaScript Object Notation).
- Use `.json()` method to convert the response to Python data structures (dict or list).
- Example:
  ```python
  data = response.json()
  ```

---

## 4. Handling API Response Structures
- Always inspect the API response format (is it a list or a dictionary?).
- Use Python's built-in methods (`.get()`, indexing, etc.) to access data.
- Example:
  ```python
  # If response is a list:
  for item in data:
      print(item)
  # If response is a dict:
  value = data.get('key')
  ```

---

## 5. Error Handling
- Use `try/except` blocks to catch and handle errors (network issues, wrong data types, etc.).
- Example:
  ```python
  try:
      response = requests.get(url)
      response.raise_for_status()
  except requests.RequestException as e:
      print('Error:', e)
  ```

---

## 6. Working with Timestamps
- APIs often return timestamps as Unix time (seconds since Jan 1, 1970).
- Use `datetime.fromtimestamp()` to convert to readable date/time.
- Example:
  ```python
  from datetime import datetime
  ts = 1757347324
  readable = datetime.fromtimestamp(ts).strftime('%Y-%m-%d %I:%M:%S %p')
  print(readable)
  ```

---

## 7. Formatting Output
- Use Python's `print()` and f-strings for clear, readable output.
- Example:
  ```python
  print(f"Problem: {title} | Status: {status} | Language: {lang} | Time: {ts_str}")
  ```

---

## 8. Step-by-Step: Building the LeetCode Tracker
1. **Import Libraries**: `requests`, `datetime`
2. **Set Username**: The LeetCode user to track
3. **Fetch Profile Data**: Use API endpoint and print summary
4. **Fetch Submissions**: Use API endpoint, get last 5 submissions
5. **Parse and Format Data**: Extract relevant info, convert timestamps
6. **Print Results**: Display in a user-friendly format

---

## 9. Common Pitfalls & Solutions
- **Missing Packages**: Install with `pip install requests`
- **Wrong Python Environment**: Use virtual environments for consistency
- **Unexpected API Response**: Always print and inspect raw data first
- **Type Errors**: Convert strings to integers as needed

---

## 10. Practice & Extend
- Try changing the username to track another user
- Add more fields to the output (e.g., problem difficulty)
- Handle more errors (e.g., user not found)
- Save results to a file for later review

---

## Conclusion
By understanding these fundamental concepts and following the step-by-step approach, you can confidently build Python programs that interact with web APIs. Practice, experiment, and don't be afraid to debug—every error is a learning opportunity!

---

## Encouragement
You now have the tools and knowledge to:
- Read API documentation
- Fetch and process data in Python
- Handle errors and format output
- Build your own API-powered projects

Keep learning and building. You can do it!
