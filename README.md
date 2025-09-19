# 🚀 Git Branch Management Guide (Main vs. v2-app)

This guide explains how to safely **revert back to the stable `main` branch** if the `v2-app` (or any other feature branch) crashes.  

We’ll use the example project where:  
- **`main`** → stable version (commit `ad46463`)  
- **`v2-app`** → experimental version (commits `9d40f2c` and `bc2774f`)  

---

## 1. Check your current branch

Run:
```bash
git status
```

Example output:
```
On branch v2-app
Your branch is up to date with 'origin/v2-app'.

nothing to commit, working tree clean
```

👉 This tells you which branch you are currently on.  
- `On branch v2-app` → you’re on the experimental version.  
- `On branch main` → you’re already on the stable version.  

---

## 2. Switch to `main` (the stable branch)

Run:
```bash
git checkout main
```

Example output:
```
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
```

👉 This changes your working directory files to match the **stable version** of the project.

---

## 3. Update `main` with the latest code from GitHub

Run:
```bash
git pull origin main
```

Example output:
```
Already up to date.
```

👉 This ensures your local `main` is synced with the remote repository on GitHub.  

---

## 4. Run the stable version of your project

At this point, your working folder has the **stable code**.  
- If you start your app (e.g., `npm run dev`, `yarn dev`, or `firebase serve`), you will see the stable version.  
- This is useful if `v2-app` (or another branch) crashes.  

---

## 5. (Optional) Switch back to `v2-app`

If you want to continue fixing the new version, run:
```bash
git checkout v2-app
```

Example output:
```
Switched to branch 'v2-app'
Your branch is up to date with 'origin/v2-app'.
```

---

## 6. Reset `main` to a known good commit (advanced)

Sometimes someone may accidentally push broken code into `main`.  
To fix this, you can **reset `main` back to a previous stable commit**.

### Step 1: Find the commit hash
Run:
```bash
git log --oneline
```

Example output:
```
bc2774f I would like to do a second version of the app, saving into a new branch
9d40f2c Try fixing this error
ad46463 Initial prototype
7cb168a Initialized workspace with Firebase Studio
```

👉 Here, `ad46463` is the **good commit** (Initial prototype).  

### Step 2: Reset `main` to that commit
Run:
```bash
git checkout main
git reset --hard ad46463
git push origin main --force
```

Explanation:  
- `git reset --hard ad46463` → moves `main` back to commit `ad46463`.  
- `git push origin main --force` → updates GitHub to match this reset state.  

⚠️ **Warning:** This rewrites history on GitHub. Anyone else working on `main` will need to re-sync their branch.

---

# 📌 Quick Summary

- Check branch:
  ```bash
  git status
  ```
- Switch to stable:
  ```bash
  git checkout main
  git pull origin main
  ```
- Run the stable app.  
- If `main` breaks, reset:
  ```bash
  git log --oneline
  git checkout main
  git reset --hard <commit-hash>
  git push origin main --force
  ```

---

✅ With this workflow:  
- `main` = always stable  
- `v2-app` = safe place to experiment  
- Easy to roll back if something breaks  
