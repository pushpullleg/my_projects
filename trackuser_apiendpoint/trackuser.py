import requests

username = "Syed_Sohail_26"

# Fetch profile stats
profile_resp = requests.get(f"https://leetcode-api-pied.vercel.app/user/{username}")
print("Profile Stats:", profile_resp.json())



# Fetch recent submissions
subs_resp = requests.get(f"https://leetcode-api-pied.vercel.app/user/{username}/submissions")
submissions = subs_resp.json()

print("Last 5 Activities:")
from datetime import datetime

for sub in submissions[:5]:
	ts = sub.get('timestamp')
	title = sub.get('title')
	status = sub.get('status')
	lang = sub.get('lang')
	# Convert timestamp to readable format
	if ts:
		try:
			ts_int = int(ts)
			ts_str = datetime.fromtimestamp(ts_int).strftime('%Y-%m-%d %H:%M:%S')
		except Exception:
			ts_str = str(ts)
	else:
		ts_str = 'N/A'
	print(f"- {title} | {status} | {lang} | {ts_str}")
