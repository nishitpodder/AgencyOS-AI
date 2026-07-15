# Git Repository

## What is Git Repository?

A Git Repository is a project folder that Git tracks and manages.

Git stores all project history, file changes, commits, branches, and versions inside a hidden folder called:

```
.git
```

---

## Why Use Git?

- Track every file change
- Restore previous versions
- Collaborate with teams
- Maintain complete project history
- Manage different features using branches

---

## Repository Types

### 1. Local Repository

Stored on your own computer.

Example:

```
D:\AgencyOS-AI
```

### 2. Remote Repository

Stored on GitHub, GitLab, or Bitbucket.

Example:

```
https://github.com/username/AgencyOS-AI
```

---

## Important Commands

### Initialize Git Repository

```bash
git init
```

Creates the hidden `.git` folder.

---

### Check Repository Status

```bash
git status
```

Shows tracked, untracked, modified, and staged files.

---

### Add All Files

```bash
git add .
```

Stages all files for commit.

---

### Create First Commit

```bash
git commit -m "Initial project structure"
```

Creates the first project snapshot.

---

## Typical Workflow

```text
Create Project
      ↓
git init
      ↓
git status
      ↓
git add .
      ↓
git commit -m "Initial Commit"
      ↓
Push to GitHub
```

---

## Best Practices

- Commit small changes frequently.
- Write meaningful commit messages.
- Check `git status` before committing.
- Push your changes regularly to GitHub.

---

## Summary

A Git Repository helps developers track changes, collaborate with teams, maintain project history, and safely manage software development.