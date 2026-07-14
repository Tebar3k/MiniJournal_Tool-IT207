# Mini Journal Search Tool

## Section 1 — Command Description

The Mini Journal Search Tool is a simple Node.js program that works with a journal text file.

The tool can:

- Display all journal entries
- Count the number of lines in the journal
- Count how many times a selected mood word appears

The tool combines simple versions of the Linux `cat`, `wc`, and `grep` commands.

### How to Run the Tool

Make sure Node.js is installed and that `journal.js` and `journal.txt` are in the same folder.

To display the journal run:

node journal.js show

To count the number of lines run:

node journal.js count

To count a mood word run:

node journal.js mood happy
