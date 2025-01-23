const commandCategories = {
    "sed Commands": [
        {
            "command": "sed 's/foo/bar/g' file.txt",
            "description": "Replace all occurrences of 'foo' with 'bar' in file.txt."
        },
        {
            "command": "sed '/pattern/d' filename.txt",
            "description": "Delete lines matching 'pattern' in filename.txt."
        },
        {
            "command": "sed -n '1,10p' filename.txt",
            "description": "Print lines from line 1 to 10 in filename.txt."
        },
        {
            "command": "sed 's/foo/bar/' file.txt > newfile.txt",
            "description": "Replace the first occurrence of 'foo' with 'bar' in each line of file.txt and save to newfile.txt."
        },
        {
            "command": "sed 's/\\s\\+/,/g' data.txt",
            "description": "Replace multiple spaces with commas in data.txt."
        },
        {
            "command": "sed 's/^/prefix_/' file.txt",
            "description": "Add 'prefix_' at the beginning of each line in file.txt."
        },
        {
            "command": "sed 's/$/_suffix/' file.txt",
            "description": "Add '_suffix' at the end of each line in file.txt."
        },
        {
            "command": "sed 's/[0-9]/#/g' numbers.txt",
            "description": "Replace all digits with '#' in numbers.txt."
        },
        {
            "command": "sed 's/\\(.*\\)/\\1 extra/' file.txt",
            "description": "Append ' extra' to each line in file.txt."
        },
        {
            "command": "sed -e 's/foo/bar/g' -e 's/baz/qux/g' file.txt",
            "description": "Replace 'foo' with 'bar' and 'baz' with 'qux' in file.txt in the same command."
        }
    ],
    "vim Commands": [
        {
            "command": "i",
            "description": "Enter insert mode in vim."
        },
        {
            "command": "Esc",
            "description": "Exit insert mode in vim."
        },
        {
            "command": ":w",
            "description": "Save the current file in vim."
        },
        {
            "command": ":q",
            "description": "Quit vim."
        },
        {
            "command": ":wq",
            "description": "Save and quit vim."
        },
        {
            "command": "u",
            "description": "Undo the last change in vim."
        },
        {
            "command": "Ctrl + r",
            "description": "Redo the last undone change in vim."
        },
        {
            "command": "yy",
            "description": "Yank (copy) the current line in vim."
        },
        {
            "command": "p",
            "description": "Paste the yanked text below the current line in vim."
        },
        {
            "command": "dd",
            "description": "Delete the current line in vim."
        },
        {
            "command": "d20d",
            "description": "Delete the next 3 lines in vim."
        },
        {
            "command": ":/pattern",
            "description": "Search for 'pattern' in the file using vim."
        },
        {
            "command": ":%s/old/new/g",
            "description": "Replace all occurrences of 'old' with 'new' in the entire file in vim."
        },
        {
            "command": ":set number",
            "description": "Display line numbers in vim."
        },
        {
            "command": ":set nonumber",
            "description": "Hide line numbers in vim."
        },
        {
            "command": ":syntax on",
            "description": "Enable syntax highlighting in vim."
        },
        {
            "command": ":syntax off",
            "description": "Disable syntax highlighting in vim."
        }
    ],
    "java": [
        {
            "command": "java -Xms128m -Xmx1024m MyProgram",
            "description": "Sets the initial heap size to 128MB and the maximum heap size to 1024MB for the Java program 'MyProgram'."
        },
        {
            "command": "javac -g MyProgram.java",
            "description": "Compiles 'MyProgram.java' with debugging information for troubleshooting."
        },
        {
            "command": "java -classpath ./lib/* MyProgram",
            "description": "Runs the Java program 'MyProgram' with the specified classpath including all JAR files in the 'lib' directory."
        },
        {
            "command": "java -jar myapp.jar",
            "description": "Runs a Java program packaged as a JAR file ('myapp.jar')."
        },
        {
            "command": "javap -c MyProgram",
            "description": "Disassembles the 'MyProgram.class' file, showing bytecode instructions in the JVM."
        },
        {
            "command": "java -Dproperty=value MyProgram",
            "description": "Sets a system property 'property' to 'value' for the execution of 'MyProgram'."
        },
        {
            "command": "java -verbose:class MyProgram",
            "description": "Runs the 'MyProgram' Java application with verbose class loading details."
        },
        {
            "command": "java -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5005 -jar myapp.jar",
            "description": "Runs 'myapp.jar' in debug mode, listening on port 5005."
        },
        {
            "command": "javac -d classes src/**/*.java",
            "description": "Compiles all Java files under the 'src' directory and places the compiled classes in the 'classes' directory."
        },
        {
            "command": "java -ea MyProgram",
            "description": "Enables assertions in the JVM when running 'MyProgram'."
        },
        {
            "command": "javac -classpath .:lib/some-library.jar MyProgram.java",
            "description": "Compiles 'MyProgram.java' with an additional external library in the classpath."
        },
        {
            "command": "java -Xmx2048m MyProgram",
            "description": "Sets the maximum heap size for the JVM to 2048MB while running 'MyProgram'."
        },
        {
            "command": "mvn clean install",
            "description": "Builds the project using Maven, cleaning up old files and installing the resulting artifacts."
        },
        {
            "command": "java -Duser.timezone=GMT MyProgram",
            "description": "Sets the system's timezone to GMT for running 'MyProgram'."
        },
        {
            "command": "java -cp .:lib/* MyProgram",
            "description": "Runs 'MyProgram' while including all the JAR files in the 'lib' directory."
        },
        {
            "command": "javadoc -d docs src/**/*.java",
            "description": "Generates Javadoc documentation for all Java files under 'src' and places it in the 'docs' folder."
        },
        {
            "command": "java -Xss1024k MyProgram",
            "description": "Sets the stack size to 1024KB for the thread stack while running 'MyProgram'."
        },
        {
            "command": "java -Dfile.encoding=UTF-8 MyProgram",
            "description": "Sets the default file encoding to UTF-8 when running 'MyProgram'."
        },
        {
            "command": "javac -encoding UTF-8 MyProgram.java",
            "description": "Compiles 'MyProgram.java' using UTF-8 character encoding."
        },
        {
            "command": "java -jar -Xmx2048m myapp.jar",
            "description": "Runs the JAR file 'myapp.jar' with a maximum heap size of 2048MB."
        }
    ],
    "python": [
        {
            "command": "python3 script.py",
            "description": "Runs the Python script 'script.py' using Python 3."
        },
        {
            "command": "pip install requests",
            "description": "Installs the 'requests' package for making HTTP requests in Python."
        },
        {
            "command": "python3 -m venv myenv",
            "description": "Creates a new virtual environment named 'myenv'."
        },
        {
            "command": "python3 script.py > output.log",
            "description": "Redirects the output of 'script.py' to a file named 'output.log'."
        },
        {
            "command": "python3 -m http.server",
            "description": "Starts a simple HTTP server on port 8000 to serve files from the current directory."
        },
        {
            "command": "pip freeze",
            "description": "Lists all installed Python packages in the current environment."
        },
        {
            "command": "python3 -m pdb script.py",
            "description": "Runs 'script.py' with the Python debugger."
        },
        {
            "command": "python3 -c 'print(1 + 1)'",
            "description": "Executes the Python one-liner '1 + 1' and prints the result."
        },
        {
            "command": "python3 -m timeit 'sum(range(100))'",
            "description": "Measures the time taken to sum the numbers from 0 to 99."
        },
        {
            "command": "python3 -m json.tool input.json",
            "description": "Pretty-prints a JSON file ('input.json') in a human-readable format."
        },
        {
            "command": "python3 -m smtpd -n -c DebuggingServer localhost:1025",
            "description": "Runs a local SMTP server for debugging purposes, listening on port 1025."
        },
        {
            "command": "python3 script.py arg1 arg2",
            "description": "Runs 'script.py' with the command-line arguments 'arg1' and 'arg2'."
        },
        {
            "command": "python3 -m unittest test_script.py",
            "description": "Runs unit tests from the 'test_script.py' file."
        },
        {
            "command": "python3 -u script.py",
            "description": "Runs 'script.py' in unbuffered mode, printing output in real-time."
        },
        {
            "command": "python3 script.py < input.txt",
            "description": "Provides 'input.txt' as the input for 'script.py'."
        },
        {
            "command": "python3 -m memory_profiler script.py",
            "description": "Profiles the memory usage of 'script.py' line-by-line."
        },
        {
            "command": "python3 script.py arg1 arg2 > output.log",
            "description": "Runs 'script.py' with arguments 'arg1' and 'arg2', saving output to 'output.log'."
        },
        {
            "command": "python3 -m venv venv && source venv/bin/activate",
            "description": "Creates and activates a virtual environment in one command."
        },
        {
            "command": "python3 -c 'import this'",
            "description": "Displays the Zen of Python (a set of guiding principles for writing Python code)."
        },
        {
            "command": "python3 -m pip install --upgrade pip",
            "description": "Upgrades the pip package manager to the latest version."
        }
    ],
    "bash": [
        {
            "command": "ls -l",
            "description": "Lists files and directories in the current directory with detailed information."
        },
        {
            "command": "cd /path/to/directory",
            "description": "Changes the current directory to '/path/to/directory'."
        },
        {
            "command": "mkdir new_folder",
            "description": "Creates a new directory named 'new_folder'."
        },
        {
            "command": "rm -rf folder_name",
            "description": "Recursively removes the directory 'folder_name' and its contents."
        },
        {
            "command": "cp file1.txt file2.txt",
            "description": "Copies 'file1.txt' to 'file2.txt'."
        },
        {
            "command": "mv file1.txt /new/path/",
            "description": "Moves 'file1.txt' to '/new/path/'."
        },
        {
            "command": "cat file.txt",
            "description": "Displays the contents of 'file.txt'."
        },
        {
            "command": "grep 'pattern' file.txt",
            "description": "Searches for 'pattern' in 'file.txt' and displays the matching lines."
        },
        {
            "command": "ps aux",
            "description": "Displays a list of all running processes on the system."
        },
        {
            "command": "top",
            "description": "Displays real-time system information, including processes, CPU, and memory usage."
        },
        {
            "command": "chmod 755 script.sh",
            "description": "Changes the file permissions of 'script.sh' to be executable by the owner, group, and others."
        },
        {
            "command": "tar -cvf archive.tar /path/to/directory",
            "description": "Creates a tar archive of the directory '/path/to/directory'."
        },
        {
            "command": "find . -name '*.txt'",
            "description": "Finds all files with the '.txt' extension in the current directory and subdirectories."
        },
        {
            "command": "df -h",
            "description": "Displays disk space usage in a human-readable format."
        },
        {
            "command": "du -sh *",
            "description": "Displays the total disk usage of files and directories in the current directory."
        },
        {
            "command": "echo 'Hello, World!' > file.txt",
            "description": "Writes 'Hello, World!' into 'file.txt'."
        },
        {
            "command": "history",
            "description": "Displays the command history of the current shell session."
        },
        {
            "command": "alias ll='ls -l'",
            "description": "Creates an alias 'll' for the command 'ls -l'."
        },
        {
            "command": "sudo apt-get update",
            "description": "Updates the list of available packages and their versions in a Debian-based system."
        }
    ],
    "grep": [
        {
            "command": "grep 'pattern' file.txt",
            "description": "Searches for the string 'pattern' in 'file.txt' and displays the matching lines."
        },
        {
            "command": "grep -i 'pattern' file.txt",
            "description": "Searches for the string 'pattern' in 'file.txt' case-insensitively."
        },
        {
            "command": "grep -r 'pattern' /path/to/directory",
            "description": "Recursively searches for 'pattern' in all files within '/path/to/directory'."
        },
        {
            "command": "grep -l 'pattern' *.txt",
            "description": "Searches for 'pattern' in all '.txt' files and lists the files containing the pattern."
        },
        {
            "command": "grep -v 'pattern' file.txt",
            "description": "Displays all lines in 'file.txt' that do not contain 'pattern'."
        },
        {
            "command": "grep -c 'pattern' file.txt",
            "description": "Counts the number of lines in 'file.txt' that contain 'pattern'."
        },
        {
            "command": "grep -w 'pattern' file.txt",
            "description": "Searches for the exact word 'pattern' in 'file.txt'."
        },
        {
            "command": "grep -n 'pattern' file.txt",
            "description": "Displays the line numbers along with the matching lines from 'file.txt'."
        },
        {
            "command": "grep -o 'pattern' file.txt",
            "description": "Only prints the matched portion of the text that corresponds to 'pattern'."
        },
        {
            "command": "grep -e 'pattern1' -e 'pattern2' file.txt",
            "description": "Searches for either 'pattern1' or 'pattern2' in 'file.txt'."
        },
        {
            "command": "grep --color=auto 'pattern' file.txt",
            "description": "Highlights the matching 'pattern' in 'file.txt' for better visibility."
        },
        {
            "command": "grep -P '\d{3}-\d{2}-\d{4}' file.txt",
            "description": "Searches for a regular expression that matches a US Social Security Number (SSN) format."
        },
        {
            "command": "grep -A 3 'pattern' file.txt",
            "description": "Displays 3 lines after each matching line containing 'pattern' in 'file.txt'."
        },
        {
            "command": "grep -B 3 'pattern' file.txt",
            "description": "Displays 3 lines before each matching line containing 'pattern' in 'file.txt'."
        },
        {
            "command": "grep -C 3 'pattern' file.txt",
            "description": "Displays 3 lines before and after each matching line containing 'pattern' in 'file.txt'."
        },
        {
            "command": "grep -f patterns.txt file.txt",
            "description": "Searches for each pattern in 'patterns.txt' within 'file.txt'."
        },
        {
            "command": "grep -z 'pattern' file.txt",
            "description": "Searches for 'pattern' across files with null byte delimiters, useful for binary data."
        },
        {
            "command": "grep -F 'pattern' file.txt",
            "description": "Searches for the literal string 'pattern' (not as a regular expression) in 'file.txt'."
        }
    ],
    "awk": [
        {
            "command": "awk '{print $1}' file.txt",
            "description": "Prints the first column of each line in 'file.txt'."
        },
        {
            "command": "awk '{print $1, $3}' file.txt",
            "description": "Prints the first and third columns of each line in 'file.txt'."
        },
        {
            "command": "awk '/pattern/ {print $0}' file.txt",
            "description": "Prints all lines in 'file.txt' that contain the string 'pattern'."
        },
        {
            "command": "awk '{print NR, $0}' file.txt",
            "description": "Prints the line number followed by the line content for each line in 'file.txt'."
        },
        {
            "command": "awk '{if ($1 > 100) print $0}' file.txt",
            "description": "Prints all lines where the first column is greater than 100."
        },
        {
            "command": "awk '{sum += $1} END {print sum}' file.txt",
            "description": "Calculates the sum of the values in the first column of 'file.txt'."
        },
        {
            "command": "awk 'BEGIN {FS=\":\"} {print $1}' file.txt",
            "description": "Sets the field separator to ':' and prints the first field from each line in 'file.txt'."
        },
        {
            "command": "awk '{print $1, $2}' file.txt | sort",
            "description": "Prints the first two columns of 'file.txt' and sorts the output."
        },
        {
            "command": "awk 'NR==2 {print $0}' file.txt",
            "description": "Prints the second line of 'file.txt'."
        },
        {
            "command": "awk '{print $1 * $2}' file.txt",
            "description": "Multiplies the first and second columns and prints the result for each line."
        },
        {
            "command": "awk '{OFS=\"-\"} {print $1, $2}' file.txt",
            "description": "Sets the output field separator to '-' and prints the first and second columns of 'file.txt'."
        },
        {
            "command": "awk '{if ($1 == \"John\") print $0}' file.txt",
            "description": "Prints all lines where the first column is 'John'."
        },
        {
            "command": "awk 'END {print NR}' file.txt",
            "description": "Prints the total number of lines in 'file.txt'."
        },
        {
            "command": "awk '{print $1, $3}' file.txt | sort -n",
            "description": "Prints the first and third columns from 'file.txt' and sorts the output numerically."
        },
        {
            "command": "awk '{print $1, $2, $3}' file.txt | uniq",
            "description": "Prints the first three columns of 'file.txt' and removes duplicate lines."
        },
        {
            "command": "awk '{print $1 * 2}' file.txt > output.txt",
            "description": "Doubles the value in the first column and writes the output to 'output.txt'."
        },
        {
            "command": "awk '{if ($1 > 10 && $2 < 20) print $0}' file.txt",
            "description": "Prints all lines where the first column is greater than 10 and the second column is less than 20."
        },
        {
            "command": "awk '{gsub(/pattern/, \"replacement\"); print $0}' file.txt",
            "description": "Replaces all occurrences of 'pattern' with 'replacement' in each line of 'file.txt'."
        }
    ],
    "linux_automation": [
        {
            "command": "curl -O http://example.com/file.zip",
            "description": "Downloads 'file.zip' from 'http://example.com' using curl."
        },
        {
            "command": "wget http://example.com/file.zip",
            "description": "Downloads 'file.zip' from 'http://example.com' using wget."
        },
        {
            "command": "scp user@remote:/path/to/file /local/destination",
            "description": "Copies a file from a remote server to a local destination using SCP."
        },
        {
            "command": "ssh user@remote 'ls -l /path/to/directory'",
            "description": "SSH into a remote server and list files in a directory."
        },
        {
            "command": "ssh user@remote 'tar -cvf archive.tar /path/to/directory'",
            "description": "SSH into a remote server and create a tar archive of a directory."
        },
        {
            "command": "scp /local/file user@remote:/path/to/destination",
            "description": "Copies a local file to a remote server using SCP."
        },
        {
            "command": "curl -X POST -d 'key=value' http://example.com/api",
            "description": "Sends a POST request with data 'key=value' to 'http://example.com/api'."
        },
        {
            "command": "curl -H 'Authorization: Bearer token' http://example.com/api",
            "description": "Makes an authenticated API request to 'http://example.com/api' using a Bearer token."
        },
        {
            "command": "wget -r -np http://example.com/directory/",
            "description": "Recursively downloads files from 'http://example.com/directory/' without following links to higher directories."
        },
        {
            "command": "cat file.txt | grep 'pattern' | sort | uniq",
            "description": "Filters lines in 'file.txt' that contain 'pattern', sorts them, and removes duplicates."
        },
        {
            "command": "cat file.txt | awk '{print $1, $2}' | sort -n",
            "description": "Prints the first two columns of 'file.txt', sorts the output numerically."
        },
        {
            "command": "ps aux | grep 'process_name'",
            "description": "Searches for running processes that contain 'process_name'."
        },
        {
            "command": "top -n 1 | head -n 20",
            "description": "Displays the top 20 processes using the 'top' command."
        },
        {
            "command": "df -h | grep '/dev/sda1'",
            "description": "Displays the disk usage of '/dev/sda1' in a human-readable format."
        },
        {
            "command": "free -h",
            "description": "Displays memory usage (free and used) in a human-readable format."
        },
        {
            "command": "lsof -i :8080",
            "description": "Lists all processes using port 8080."
        },
        {
            "command": "find /path/to/dir -type f -name '*.txt' | xargs wc -l",
            "description": "Finds all '.txt' files in a directory and counts the total number of lines in them."
        },
        {
            "command": "ssh user@remote 'ps aux | grep apache2 | awk '{print $2}' | xargs kill'",
            "description": "SSH into a remote server and kills all Apache2 processes."
        },
        {
            "command": "tar -cvf archive.tar.gz file1 file2",
            "description": "Creates a tar archive (gzip-compressed) of 'file1' and 'file2'."
        },
        {
            "command": "tar -xvf archive.tar.gz",
            "description": "Extracts files from the 'archive.tar.gz' tar archive."
        },
        {
            "command": "grep -r 'pattern' /path/to/dir",
            "description": "Recursively searches for 'pattern' in all files under the specified directory."
        },
        {
            "command": "awk '{print $1, $3}' file.txt | sort -n",
            "description": "Prints the first and third columns from 'file.txt' and sorts them numerically."
        },
        {
            "command": "cat file1.txt file2.txt | sort | uniq > merged_sorted.txt",
            "description": "Combines two files, sorts them, removes duplicates, and writes the output to 'merged_sorted.txt'."
        },
        {
            "command": "echo 'Hello, World!' | tee file.txt",
            "description": "Writes 'Hello, World!' to both the console and 'file.txt' using the 'tee' command."
        },
        {
            "command": "curl -I http://example.com",
            "description": "Fetches the HTTP headers of 'http://example.com'."
        },
        {
            "command": "curl --limit-rate 100k -O http://example.com/file.zip",
            "description": "Downloads 'file.zip' from 'http://example.com' with a download rate limit of 100KB/s."
        },
        {
            "command": "wget -q --spider http://example.com",
            "description": "Checks if 'http://example.com' is reachable, without downloading anything."
        },
        {
            "command": "scp -r user@remote:/path/to/dir /local/destination",
            "description": "Recursively copies an entire directory from a remote server to a local destination."
        },
        {
            "command": "ssh user@remote 'tar -czf - /path/to/dir' | tar -xzvf - -C /local/destination",
            "description": "Transfers and extracts a tar archive of a directory from a remote server to a local destination using SSH."
        },
        {
            "command": "curl -sSL https://get.docker.com/ | sh",
            "description": "Downloads and installs Docker on a system using the official installation script."
        },
        {
            "command": "vmstat 1 5",
            "description": "Displays virtual memory statistics, updating every second for 5 iterations."
        },
        {
            "command": "dmesg | grep -i 'error'",
            "description": "Searches for 'error' messages in the system's kernel buffer logs."
        },
        {
            "command": "systemctl status apache2",
            "description": "Checks the status of the 'apache2' service."
        },
        {
            "command": "ps aux | awk '{if($3 > 50) print $0}'",
            "description": "Prints all processes that are using more than 50% CPU."
        },
        {
            "command": "curl -L https://github.com/user/repo/archive/main.zip -o repo.zip",
            "description": "Downloads a zipped archive of a GitHub repository."
        },
        {
            "command": "find /var/log/ -type f -exec grep -l 'ERROR' {} +",
            "description": "Finds all files in '/var/log/' containing the word 'ERROR'."
        },
        {
            "command": "scp -P 2222 user@remote:/path/to/file /local/destination",
            "description": "Copies a file over SCP using a non-default port (2222)."
        },
        {
            "command": "cat log.txt | grep 'error' | tail -n 10",
            "description": "Finds 'error' in 'log.txt' and displays the last 10 matching lines."
        },
        {
            "command": "ssh user@remote 'sudo systemctl restart apache2'",
            "description": "Restarts the 'apache2' service on a remote server over SSH."
        },
        {
            "command": "watch -n 5 'df -h'",
            "description": "Watches and refreshes the output of the disk usage command every 5 seconds."
        },
        {
            "command": "tar -czvf backup.tar.gz /home/user",
            "description": "Creates a compressed backup of the '/home/user' directory."
        },
        {
            "command": "curl -s http://example.com | grep -o 'href=[^ ]*' | sed 's/href=//' | sort -u",
            "description": "Fetches the HTML content from 'http://example.com', extracts unique links (href attributes), and sorts them."
        },
        {
            "command": "scp user@remote:/path/to/backup /local/backup",
            "description": "Copies a backup file from a remote server to the local machine using SCP."
        },
        {
            "command": "find /home/user -type f -exec chmod 600 {} +",
            "description": "Recursively changes the file permissions of all files in '/home/user' to read and write for the owner only."
        },
        {
            "command": "echo 'password' | sshpass ssh user@remote 'sudo -S command'",
            "description": "Uses SSH and passes the password via 'sshpass' to run a command as sudo on a remote server."
        },
        {
            "command": "curl --silent --fail --show-error http://example.com",
            "description": "Fetches a URL quietly, only showing output in case of failure."
        },
        {
            "command": "grep -r 'pattern' /path/to/dir | tee result.txt",
            "description": "Recursively searches for 'pattern' in all files under '/path/to/dir' and writes results to both the console and 'result.txt'."
        },
        {
            "command": "systemctl restart apache2 && systemctl status apache2",
            "description": "Restarts the 'apache2' service and checks its status."
        }
    ],
    "File Management Commands": [
        {
            "command": "ls -la",
            "description": "List all files and directories with detailed information."
        },
        {
            "command": "cd /var/log",
            "description": "Change directory to /var/log."
        },
        {
            "command": "mkdir new_folder",
            "description": "Create a new directory named 'new_folder'."
        },
        {
            "command": "rmdir old_folder",
            "description": "Remove an empty directory named 'old_folder'."
        },
        {
            "command": "cp source.txt destination.txt",
            "description": "Copy source.txt to destination.txt."
        },
        {
            "command": "mv oldname.txt newname.txt",
            "description": "Move or rename oldname.txt to newname.txt."
        },
        {
            "command": "rm -f unwanted_file.txt",
            "description": "Forcefully remove unwanted_file.txt without prompting."
        },
        {
            "command": "find . -type f -name \"*.log\"",
            "description": "Find all .log files in the current directory and subdirectories."
        },
        {
            "command": "tar -xzvf archive.tar.gz",
            "description": "Extract a gzip-compressed archive."
        },
        {
            "command": "tar -cvf archive.tar /path/to/directory",
            "description": "Create a tar archive of a directory."
        }
    ],
    "python_simple_best_practices": [
        {
            "command": "x = [i**2 for i in range(10)]",
            "description": "Creates a list of squares for numbers from 0 to 9 using list comprehension."
        },
        {
            "command": "y = sorted(['banana', 'apple', 'cherry'])",
            "description": "Sorts a list of strings alphabetically and assigns it to 'y'."
        },
        {
            "command": "z = [x for x in range(20) if x % 2 == 0]",
            "description": "Generates a list of even numbers from 0 to 19 using a comprehension."
        },
        {
            "command": "a = {'name': 'Alice', 'age': 25}",
            "description": "Creates a dictionary with keys 'name' and 'age'."
        },
        {
            "command": "b = len('Hello World')",
            "description": "Finds the length of the string 'Hello World'."
        },
        {
            "command": "c = 'Python'.upper()",
            "description": "Converts the string 'Python' to uppercase."
        },
        {
            "command": "d = '  strip whitespace  '.strip()",
            "description": "Removes leading and trailing whitespaces from the string."
        },
        {
            "command": "e = list(map(int, ['1', '2', '3']))",
            "description": "Converts a list of string numbers to integers using 'map'."
        },
        {
            "command": "f = [i for i in range(100) if i % 3 == 0]",
            "description": "Creates a list of numbers divisible by 3 from 0 to 99."
        },
        {
            "command": "g = sum([1, 2, 3, 4])",
            "description": "Calculates the sum of the list [1, 2, 3, 4]."
        },
        {
            "command": "h = max([10, 20, 5, 8])",
            "description": "Finds the maximum value in a list of numbers."
        },
        {
            "command": "i = min([10, 20, 5, 8])",
            "description": "Finds the minimum value in a list of numbers."
        },
        {
            "command": "j = list(range(5, 20, 3))",
            "description": "Creates a list starting at 5, ending before 20, with step 3."
        },
        {
            "command": "k = round(123.456, 2)",
            "description": "Rounds the number 123.456 to 2 decimal places."
        },
        {
            "command": "l = abs(-10)",
            "description": "Returns the absolute value of -10."
        },
        {
            "command": "m = [char for char in 'python' if char not in 'aeiou']",
            "description": "Filters vowels out of the string 'python' using a comprehension."
        },
        {
            "command": "n = zip(['a', 'b'], [1, 2])",
            "description": "Pairs elements from two lists into tuples using 'zip'."
        },
        {
            "command": "o = {x: x**2 for x in range(5)}",
            "description": "Creates a dictionary with numbers as keys and their squares as values."
        },
        {
            "command": "p = all([True, False, True])",
            "description": "Checks if all elements in the list are True; returns False."
        },
        {
            "command": "q = any([True, False, True])",
            "description": "Checks if any element in the list is True; returns True."
        },
        {
            "command": "r = 'Hello, {name}!'.format(name='World')",
            "description": "Formats the string using named placeholders."
        },
        {
            "command": "s = [*range(5)]",
            "description": "Expands the range into a list."
        },
        {
            "command": "t = (lambda x: x + 10)(5)",
            "description": "Applies a lambda function to add 10 to the number 5."
        },
        {
            "command": "u = sorted(['apple', 'banana', 'cherry'], key=len)",
            "description": "Sorts the list of strings by their length."
        },
        {
            "command": "v = filter(lambda x: x > 10, [5, 15, 25])",
            "description": "Filters elements greater than 10 from the list."
        },
        {
            "command": "w = [x**2 for x in range(10) if x % 2 != 0]",
            "description": "Generates squares of odd numbers from 0 to 9."
        },
        {
            "command": "x = {'apple', 'banana', 'cherry'}",
            "description": "Creates a set with unique elements."
        },
        {
            "command": "y = {i: chr(65 + i) for i in range(5)}",
            "description": "Creates a dictionary mapping numbers to their uppercase ASCII characters."
        },
        {
            "command": "z = list(map(str, [1, 2, 3]))",
            "description": "Converts a list of numbers to a list of strings."
        },
        {
            "command": "aa = [val for val in range(20) if val % 2 == 1]",
            "description": "Creates a list of odd numbers from 0 to 19."
        },
        {
            "command": "ab = len(set('hello'))",
            "description": "Finds the count of unique characters in the string 'hello'."
        },
        {
            "command": "ac = {x for x in range(10) if x % 2 == 0}",
            "description": "Creates a set of even numbers from 0 to 9."
        },
        {
            "command": "ad = next(iter(['a', 'b', 'c']))",
            "description": "Gets the first element from the iterable."
        },
        {
            "command": "ae = all([len(word) > 3 for word in ['apple', 'bat', 'cat']])",
            "description": "Checks if all words in the list have more than 3 characters."
        },
        {
            "command": "af = any(char.isdigit() for char in 'abc123')",
            "description": "Checks if any character in the string is a digit."
        },
        {
            "command": "ag = sorted(['x', 'a', 'z', 'b'], reverse=True)",
            "description": "Sorts the list of characters in reverse order."
        },
        {
            "command": "ah = [x / 2 for x in range(5)]",
            "description": "Generates a list by dividing numbers from 0 to 4 by 2."
        },
        {
            "command": "ai = {val: val*10 for val in range(5)}",
            "description": "Creates a dictionary where keys are numbers and values are their multiples of 10."
        },
        {
            "command": "aj = {word: len(word) for word in ['apple', 'bat', 'cat']}",
            "description": "Creates a dictionary mapping words to their lengths."
        },
        {
            "command": "ak = tuple(reversed((1, 2, 3)))",
            "description": "Creates a reversed tuple from (1, 2, 3)."
        },
        {
            "command": "al = [x + y for x, y in zip([1, 2], [3, 4])]",
            "description": "Sums corresponding elements from two lists."
        },
        {
            "command": "am = {x: x**3 for x in range(5)}",
            "description": "Creates a dictionary with numbers as keys and their cubes as values."
        },
        {
            "command": "an = list(reversed(range(5)))",
            "description": "Creates a reversed list from the range 0 to 4."
        },
        {
            "command": "ao = sorted(['zebra', 'elephant', 'cat'], key=len)",
            "description": "Sorts a list of strings based on their length."
        },
        {
            "command": "ap = [val for val in range(10) if val % 3 == 0]",
            "description": "Generates a list of numbers divisible by 3 from 0 to 9."
        },
        {
            "command": "aq = 'hello'.count('l')",
            "description": "Counts the occurrences of 'l' in the string 'hello'."
        },
        {
            "command": "ar = 'python'.replace('on', 'OFF')",
            "description": "Replaces 'on' with 'OFF' in the string 'python'."
        },
        {
            "command": "as = list(filter(lambda x: x % 2 == 0, range(10)))",
            "description": "Filters even numbers from the range 0 to 9."
        }
    ],
    "python numpy": [
        {
            "command": "import numpy as np",
            "description": "Imports the numpy library as 'np' for numerical computations."
        },
        {
            "command": "arr = np.array([1, 2, 3])",
            "description": "Creates a 1D numpy array from a Python list."
        },
        {
            "command": "arr = np.zeros((2, 3))",
            "description": "Creates a 2x3 array filled with zeros."
        },
        {
            "command": "arr = np.ones((3, 2))",
            "description": "Creates a 3x2 array filled with ones."
        },
        {
            "command": "arr = np.eye(4)",
            "description": "Creates a 4x4 identity matrix."
        },
        {
            "command": "arr = np.linspace(0, 10, 5)",
            "description": "Creates an array of 5 evenly spaced numbers between 0 and 10."
        },
        {
            "command": "arr = np.arange(0, 10, 2)",
            "description": "Creates an array of numbers from 0 to 10 with a step of 2."
        },
        {
            "command": "arr = np.random.rand(2, 3)",
            "description": "Creates a 2x3 array with random numbers between 0 and 1."
        },
        {
            "command": "arr = np.random.randint(0, 10, (3, 3))",
            "description": "Creates a 3x3 array with random integers between 0 and 10."
        },
        {
            "command": "arr = np.full((2, 3), 7)",
            "description": "Creates a 2x3 array filled with the number 7."
        },
        {
            "command": "arr = np.mean([1, 2, 3])",
            "description": "Calculates the mean of the array [1, 2, 3]."
        },
        {
            "command": "arr = np.sum(np.array([1, 2, 3]))",
            "description": "Calculates the sum of the numpy array [1, 2, 3]."
        },
        {
            "command": "arr = np.max(np.array([1, 2, 3]))",
            "description": "Finds the maximum value in the numpy array [1, 2, 3]."
        },
        {
            "command": "arr = np.min(np.array([1, 2, 3]))",
            "description": "Finds the minimum value in the numpy array [1, 2, 3]."
        },
        {
            "command": "arr = np.dot(np.array([1, 2]), np.array([3, 4]))",
            "description": "Calculates the dot product of two arrays."
        },
        {
            "command": "arr = np.transpose(np.array([[1, 2], [3, 4]]))",
            "description": "Transposes a 2D array."
        },
        {
            "command": "arr = np.reshape(np.arange(12), (3, 4))",
            "description": "Reshapes a 1D array of 12 elements into a 3x4 2D array."
        },
        {
            "command": "arr = np.sqrt(np.array([1, 4, 9]))",
            "description": "Calculates the square root of each element in the array."
        },
        {
            "command": "arr = np.concatenate((np.array([1, 2]), np.array([3, 4])))",
            "description": "Concatenates two 1D arrays."
        },
        {
            "command": "arr = np.hstack((np.array([1, 2]), np.array([3, 4])))",
            "description": "Horizontally stacks two arrays."
        },
        {
            "command": "arr = np.vstack((np.array([1, 2]), np.array([3, 4])))",
            "description": "Vertically stacks two arrays."
        },
        {
            "command": "arr = np.array([1, 2, 3]) * 2",
            "description": "Multiplies each element in the array by 2."
        },
        {
            "command": "arr = np.array([1, 2, 3]) + np.array([4, 5, 6])",
            "description": "Element-wise addition of two arrays."
        },
        {
            "command": "arr = np.array([1, 2, 3]) / 2",
            "description": "Divides each element in the array by 2."
        }
    ],
    "python pandas": [
        {
            "command": "import pandas as pd",
            "description": "Imports the pandas library as 'pd' for data manipulation."
        },
        {
            "command": "df = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})",
            "description": "Creates a DataFrame with two columns, 'A' and 'B'."
        },
        {
            "command": "df = pd.read_csv('data.csv')",
            "description": "Reads a CSV file into a pandas DataFrame."
        },
        {
            "command": "df.head()",
            "description": "Displays the first 5 rows of the DataFrame."
        },
        {
            "command": "df.tail(3)",
            "description": "Displays the last 3 rows of the DataFrame."
        },
        {
            "command": "df.describe()",
            "description": "Generates descriptive statistics for numeric columns."
        },
        {
            "command": "df.info()",
            "description": "Prints a summary of the DataFrame, including column data types."
        },
        {
            "command": "df['A'] = df['A'] * 2",
            "description": "Doubles the values in column 'A'."
        },
        {
            "command": "df['C'] = df['A'] + df['B']",
            "description": "Creates a new column 'C' as the sum of columns 'A' and 'B'."
        },
        {
            "command": "df['D'] = df['A'].apply(lambda x: x**2)",
            "description": "Creates a new column 'D' with the square of values in 'A'."
        },
        {
            "command": "df = df.drop('B', axis=1)",
            "description": "Drops the column 'B' from the DataFrame."
        },
        {
            "command": "df = df.rename(columns={'A': 'Alpha'})",
            "description": "Renames column 'A' to 'Alpha'."
        },
        {
            "command": "df = df.sort_values(by='A')",
            "description": "Sorts the DataFrame by column 'A'."
        },
        {
            "command": "df = df[df['A'] > 2]",
            "description": "Filters the DataFrame to include rows where 'A' is greater than 2."
        },
        {
            "command": "df = df.fillna(0)",
            "description": "Fills missing values in the DataFrame with 0."
        },
        {
            "command": "df = pd.concat([df1, df2])",
            "description": "Concatenates two DataFrames vertically."
        },
        {
            "command": "df = pd.merge(df1, df2, on='key')",
            "description": "Merges two DataFrames on the column 'key'."
        },
        {
            "command": "df.to_csv('output.csv', index=False)",
            "description": "Saves the DataFrame to a CSV file without the index."
        },
        {
            "command": "df['A'] = df['A'].astype(float)",
            "description": "Converts the data type of column 'A' to float."
        },
        {
            "command": "df['A'] = df['A'].replace(1, 100)",
            "description": "Replaces all occurrences of 1 with 100 in column 'A'."
        },
        {
            "command": "df['E'] = df['A'].cumsum()",
            "description": "Adds a new column 'E' with the cumulative sum of column 'A'."
        },
        {
            "command": "df = df.pivot(index='A', columns='B', values='C')",
            "description": "Creates a pivot table from the DataFrame."
        },
        {
            "command": "df = df.reset_index()",
            "description": "Resets the index of the DataFrame."
        },
        {
            "command": "df.groupby('customerId').mean()",
            "description": "Groups the DataFrame by column 'customerId' and calculates the mean for each group."
        },
        {
            "command": "df['F'] = df['A'].rolling(window=2).mean()",
            "description": "Adds a new column 'F' with the rolling mean of column 'A'."
        }
    ],
    "python pypy": [
        {
            "command": "pypy --version",
            "description": "Displays the version of PyPy installed on the system."
        },
        {
            "command": "pypy script.py",
            "description": "Runs a Python script 'script.py' using the PyPy interpreter."
        },
        {
            "command": "pypy -m timeit 'x = [i**2 for i in range(1000)]'",
            "description": "Measures the execution time of a list comprehension using PyPy."
        },
        {
            "command": "pypy -c 'print(2**100)'",
            "description": "Executes a one-liner Python command using PyPy."
        },
        {
            "command": "pypy -m cProfile script.py",
            "description": "Profiles the execution of 'script.py' for performance analysis."
        },
        {
            "command": "pypy -O script.py",
            "description": "Runs 'script.py' with optimizations enabled."
        },
        {
            "command": "pypy -m ensurepip",
            "description": "Installs 'pip' for the PyPy environment."
        },
        {
            "command": "pypy -m pip install numpy",
            "description": "Installs the 'numpy' library in the PyPy environment."
        },
        {
            "command": "pypy -m pip list",
            "description": "Lists all installed packages in the PyPy environment."
        },
        {
            "command": "pypy -m py_compile script.py",
            "description": "Compiles 'script.py' into a Python bytecode file."
        },
        {
            "command": "pypy -m pdb script.py",
            "description": "Runs the Python debugger for 'script.py' using PyPy."
        },
        {
            "command": "pypy -m json.tool file.json",
            "description": "Pretty-prints the JSON content of 'file.json' using PyPy."
        },
        {
            "command": "pypy -X faulthandler=1 script.py",
            "description": "Runs 'script.py' with the fault handler enabled to debug segmentation faults."
        },
        {
            "command": "pypy -m unittest discover",
            "description": "Discovers and runs all unittests in the current directory using PyPy."
        },
        {
            "command": "pypy -m venv pypy_env",
            "description": "Creates a virtual environment named 'pypy_env' using PyPy."
        },
        {
            "command": "pypy script.py arg1 arg2",
            "description": "Runs 'script.py' with command-line arguments 'arg1' and 'arg2' using PyPy."
        },
        {
            "command": "pypy -m pip install -U pip setuptools",
            "description": "Upgrades 'pip' and 'setuptools' in the PyPy environment."
        },
        {
            "command": "pypy -m timeit -s 'import math' 'math.sqrt(100)'",
            "description": "Measures the execution time of a math operation using PyPy."
        },
        {
            "command": "pypy -m gc -h",
            "description": "Displays help information about garbage collection options in PyPy."
        },
        {
            "command": "pypy -m sysconfig",
            "description": "Prints the configuration details of the PyPy environment."
        }
    ],
    "python_dictionary_list_operations": [
        {
            "command": "my_dict = {'name': 'Alice', 'age': 30}",
            "description": "Creates a dictionary with keys 'name' and 'age'."
        },
        {
            "command": "my_dict['age'] = 31",
            "description": "Updates the value of the 'age' key in the dictionary."
        },
        {
            "command": "my_dict['city'] = 'New York'",
            "description": "Adds a new key-value pair 'city': 'New York' to the dictionary."
        },
        {
            "command": "del my_dict['age']",
            "description": "Deletes the key 'age' and its value from the dictionary."
        },
        {
            "command": "my_dict.keys()",
            "description": "Returns all keys in the dictionary as a view object."
        },
        {
            "command": "my_dict.values()",
            "description": "Returns all values in the dictionary as a view object."
        },
        {
            "command": "my_dict.items()",
            "description": "Returns all key-value pairs in the dictionary as a view object."
        },
        {
            "command": "my_dict.get('name', 'Unknown')",
            "description": "Gets the value of 'name'; returns 'Unknown' if the key does not exist."
        },
        {
            "command": "my_dict.update({'age': 32, 'job': 'Engineer'})",
            "description": "Updates the dictionary with new key-value pairs or modifies existing ones."
        },
        {
            "command": "my_dict.pop('city')",
            "description": "Removes the key 'city' and returns its value."
        },
        {
            "command": "list1 = [1, 2, 3]",
            "description": "Creates a list with elements 1, 2, and 3."
        },
        {
            "command": "list1.append(4)",
            "description": "Adds the element 4 to the end of the list."
        },
        {
            "command": "list1.extend([5, 6])",
            "description": "Extends the list by appending elements from another list."
        },
        {
            "command": "list1.insert(1, 'a')",
            "description": "Inserts the element 'a' at index 1 in the list."
        },
        {
            "command": "list1.pop()",
            "description": "Removes and returns the last element from the list."
        },
        {
            "command": "list1.remove(2)",
            "description": "Removes the first occurrence of the element 2 from the list."
        },
        {
            "command": "list1.index(3)",
            "description": "Returns the index of the first occurrence of the element 3."
        },
        {
            "command": "list1.count(1)",
            "description": "Counts the number of occurrences of the element 1 in the list."
        },
        {
            "command": "list1.reverse()",
            "description": "Reverses the elements of the list in place."
        },
        {
            "command": "list1.sort()",
            "description": "Sorts the elements of the list in ascending order."
        },
        {
            "command": "list1.sort(reverse=True)",
            "description": "Sorts the elements of the list in descending order."
        },
        {
            "command": "list1 = [x * 2 for x in list1]",
            "description": "Doubles each element in the list using a list comprehension."
        },
        {
            "command": "list1 = list(set(list1))",
            "description": "Removes duplicate elements from the list by converting it to a set and back to a list."
        },
        {
            "command": "list1.clear()",
            "description": "Removes all elements from the list."
        },
        {
            "command": "new_dict = {k: v for k, v in my_dict.items() if v != 'New York'}",
            "description": "Creates a new dictionary excluding keys with a specific value."
        },
        {
            "command": "merged_dict = {**dict1, **dict2}",
            "description": "Merges two dictionaries into a single dictionary."
        },
        {
            "command": "squared_dict = {x: x**2 for x in range(5)}",
            "description": "Creates a dictionary with numbers as keys and their squares as values."
        },
        {
            "command": "sorted_dict = dict(sorted(my_dict.items()))",
            "description": "Sorts a dictionary by its keys."
        },
        {
            "command": "inverted_dict = {v: k for k, v in my_dict.items()}",
            "description": "Creates a new dictionary by inverting keys and values."
        }
    ],
    "sql_examples": [
        {
            "command": "select employees.name, departments.department_name from employees join departments on employees.department_id = departments.id;",
            "description": "Joins the employees table with the departments table to retrieve employee names and their corresponding department names."
        },
        {
            "command": "select orders.order_id, customers.customer_name, orders.total_amount from orders join customers on orders.customer_id = customers.id where orders.total_amount > 1000;",
            "description": "Joins the orders table with the customers table to retrieve orders with a total amount greater than 1000 and their corresponding customer names."
        },
        {
            "command": "select products.product_name, categories.category_name, sum(order_items.quantity) as total_sold from products join categories on products.category_id = categories.id join order_items on products.id = order_items.product_id group by products.product_name, categories.category_name order by total_sold desc;",
            "description": "Retrieves product names, their categories, and the total quantity sold, grouped by product and category, sorted by the total sold in descending order."
        },
        {
            "command": "select stores.store_name, regions.region_name, avg(sales.revenue) as average_revenue from stores join regions on stores.region_id = regions.id join sales on stores.id = sales.store_id group by stores.store_name, regions.region_name having avg(sales.revenue) > 5000;",
            "description": "Finds the average revenue for each store grouped by region and filters results where the average revenue is greater than 5000."
        },
        {
            "command": "select projects.project_name, employees.name, sum(project_hours.hours_worked) as total_hours from projects join project_hours on projects.id = project_hours.project_id join employees on project_hours.employee_id = employees.id group by projects.project_name, employees.name order by total_hours desc;",
            "description": "Displays total hours worked on each project by employees, grouped by project and employee, sorted by total hours in descending order."
        },
        {
            "command": "select clients.client_name, invoices.invoice_date, invoices.total_amount from clients join invoices on clients.id = invoices.client_id where invoices.invoice_date between '2023-01-01' and '2023-12-31';",
            "description": "Retrieves client names, invoice dates, and total amounts for invoices issued in the year 2023."
        },
        {
            "command": "select suppliers.supplier_name, products.product_name, count(products.id) as total_products from suppliers join products on suppliers.id = products.supplier_id group by suppliers.supplier_name, products.product_name having count(products.id) > 5;",
            "description": "Lists suppliers and their products, filtering suppliers with more than 5 products, grouped by supplier and product."
        },
        {
            "command": "select courses.course_name, students.student_name, enrollments.enrollment_date from courses join enrollments on courses.id = enrollments.course_id join students on enrollments.student_id = students.id where courses.course_level = 'Advanced';",
            "description": "Retrieves the names of advanced-level courses, the students enrolled, and the enrollment dates."
        },
        {
            "command": "select tickets.ticket_id, customers.customer_name, events.event_name, tickets.purchase_date from tickets join customers on tickets.customer_id = customers.id join events on tickets.event_id = events.id where events.event_date > current_date;",
            "description": "Fetches ticket details including customer names and event names for events scheduled after the current date."
        },
        {
            "command": "select doctors.doctor_name, specialties.specialty_name, count(appointments.id) as total_appointments from doctors join specialties on doctors.specialty_id = specialties.id join appointments on doctors.id = appointments.doctor_id group by doctors.doctor_name, specialties.specialty_name order by total_appointments desc;",
            "description": "Lists doctors, their specialties, and the total number of appointments they have, grouped and sorted by the total number of appointments."
        },
        {
            "command": "select vehicles.vehicle_type, rentals.rental_date, count(rentals.id) as total_rentals from vehicles join rentals on vehicles.id = rentals.vehicle_id group by vehicles.vehicle_type, rentals.rental_date having count(rentals.id) > 10;",
            "description": "Retrieves vehicle types and rental dates where the total rentals for that date exceed 10, grouped by vehicle type and rental date."
        },
        {
            "command": "select movies.movie_title, genres.genre_name, avg(ratings.rating) as average_rating from movies join genres on movies.genre_id = genres.id join ratings on movies.id = ratings.movie_id group by movies.movie_title, genres.genre_name order by average_rating desc;",
            "description": "Displays movie titles, their genres, and the average rating for each movie, grouped and sorted by average rating in descending order."
        },
        {
            "command": "select hotels.hotel_name, cities.city_name, avg(reviews.rating) as average_rating from hotels join cities on hotels.city_id = cities.id join reviews on hotels.id = reviews.hotel_id group by hotels.hotel_name, cities.city_name order by average_rating desc;",
            "description": "Lists hotels, their cities, and their average review ratings, grouped and sorted by average rating."
        },
        {
            "command": "select warehouses.warehouse_name, products.product_name, sum(inventory.quantity) as total_quantity from warehouses join inventory on warehouses.id = inventory.warehouse_id join products on inventory.product_id = products.id group by warehouses.warehouse_name, products.product_name order by total_quantity desc;",
            "description": "Displays warehouses, their stored products, and the total quantity of each product, grouped and sorted by total quantity in descending order."
        },
        {
            "command": "select flights.flight_number, airports.airport_name, avg(delays.delay_minutes) as average_delay from flights join airports on flights.destination_airport_id = airports.id join delays on flights.id = delays.flight_id group by flights.flight_number, airports.airport_name having avg(delays.delay_minutes) > 15;",
            "description": "Retrieves flights and their destination airports where the average delay is greater than 15 minutes, grouped by flight and airport."
        },
        {
            "command": "select books.book_title, authors.author_name, count(loans.id) as total_loans from books join authors on books.author_id = authors.id join loans on books.id = loans.book_id group by books.book_title, authors.author_name order by total_loans desc;",
            "description": "Lists books, their authors, and the total number of loans for each book, grouped and sorted by total loans in descending order."
        },
        {
            "command": "select restaurants.restaurant_name, cuisines.cuisine_type, avg(reviews.rating) as average_rating from restaurants join cuisines on restaurants.cuisine_id = cuisines.id join reviews on restaurants.id = reviews.restaurant_id group by restaurants.restaurant_name, cuisines.cuisine_type order by average_rating desc;",
            "description": "Displays restaurant names, their cuisines, and their average review ratings, grouped and sorted by average rating."
        },
        {
            "command": "select trainers.trainer_name, fitness_classes.class_name, count(attendances.id) as total_attendance from trainers join fitness_classes on trainers.id = fitness_classes.trainer_id join attendances on fitness_classes.id = attendances.class_id group by trainers.trainer_name, fitness_classes.class_name order by total_attendance desc;",
            "description": "Lists trainers, their fitness classes, and the total number of attendees for each class, grouped and sorted by total attendance."
        },
        {
            "command": "select exhibitions.exhibition_name, museums.museum_name, count(visitors.id) as total_visitors from exhibitions join museums on exhibitions.museum_id = museums.id join visitors on exhibitions.id = visitors.exhibition_id group by exhibitions.exhibition_name, museums.museum_name order by total_visitors desc;",
            "description": "Displays exhibition names, their hosting museums, and the total number of visitors, grouped and sorted by total visitors."
        }
    ],
    "excel_powerful_functions": [
        {
            "command": "=sum(data_range)",
            "description": "Uses a named range 'data_range' to calculate the sum of all values in the range. Named ranges make formulas more readable and maintainable."
        },
        {
            "command": "=index($a$2:$d$10, 3, 2)",
            "description": "Retrieves the value from the third row and second column within the absolute range $A$2:$D$10."
        },
        {
            "command": "=vlookup(lookup_value, data_table, 2, false)",
            "description": "Searches for 'lookup_value' in the first column of the named range 'data_table' and returns the value in the second column."
        },
        {
            "command": "=xlookup(lookup_value, lookup_array, return_array, \"not found\")",
            "description": "Finds 'lookup_value' in the 'lookup_array' and returns the corresponding value from the 'return_array', with a fallback of 'not found' if no match exists."
        },
        {
            "command": "=filter(data_range, criteria_range > 10)",
            "description": "Filters the values in the named range 'data_range' where the corresponding 'criteria_range' is greater than 10."
        },
        {
            "command": "=unique(filter(data_range, criteria_range=\"active\"))",
            "description": "Returns unique values from 'data_range' where 'criteria_range' equals 'active'."
        },
        {
            "command": "=let(total_sales, sum(sales_range), total_sales / count(sales_range))",
            "description": "Calculates the average sales using the LET function to define 'total_sales' as the sum of 'sales_range'."
        },
        {
            "command": "=lambda(x, y, x*y)(3, 4)",
            "description": "Defines an inline lambda function to multiply two numbers and applies it to 3 and 4."
        },
        {
            "command": "=choose(2, \"apple\", \"banana\", \"cherry\")",
            "description": "Selects the second value ('banana') from the list of options provided."
        },
        {
            "command": "=transpose($a$1:$c$3)",
            "description": "Transforms rows into columns and columns into rows for the range $A$1:$C$3."
        },
        {
            "command": "=text(today(), \"yyyy-mm-dd\")",
            "description": "Formats today's date as 'YYYY-MM-DD'."
        },
        {
            "command": "=networkdays(start_date, end_date, holidays_range)",
            "description": "Calculates the number of working days between 'start_date' and 'end_date', excluding weekends and dates in 'holidays_range'."
        },
        {
            "command": "=indirect(\"sheet1!a1\")",
            "description": "Dynamically references the value in cell A1 on Sheet1 using the INDIRECT function."
        },
        {
            "command": "=offset($a$1, 3, 2, 2, 2)",
            "description": "Returns a 2x2 range starting 3 rows down and 2 columns to the right of cell $A$1."
        },
        {
            "command": "=sumif(sales_range, \">1000\", bonus_range)",
            "description": "Sums the 'bonus_range' where the corresponding value in 'sales_range' is greater than 1000."
        },
        {
            "command": "=countif(status_range, \"approved\")",
            "description": "Counts the number of cells in 'status_range' that contain the value 'approved'."
        },
        {
            "command": "=concat(a1:a10, \"; \")",
            "description": "Concatenates all values in the range A1:A10, separated by a semicolon."
        },
        {
            "command": "=rank.eq(b2, sales_range, 0)",
            "description": "Ranks the value in B2 within 'sales_range', with the highest value ranked as 1."
        },
        {
            "command": "=round(sum(revenue_range), 2)",
            "description": "Calculates the sum of 'revenue_range' and rounds the result to 2 decimal places."
        },
        {
            "command": "=importxml(\"https://example.com\", \"//title\")",
            "description": "Imports the title of the web page at 'https://example.com' using XPath."
        },
        {
            "command": "=importhtml(\"https://example.com\", \"table\", 1)",
            "description": "Imports the first HTML table from the web page at 'https://example.com'."
        },
        {
            "command": "=regexextract(a1, \"\d+\")",
            "description": "Extracts the first sequence of digits from the text in cell A1."
        },
        {
            "command": "=regexreplace(a1, \"old\", \"new\")",
            "description": "Replaces all occurrences of 'old' with 'new' in the text in cell A1."
        },
        {
            "command": "=query(data_range, \"select a, sum(b) where c > 10 group by a order by sum(b) desc\")",
            "description": "Uses the QUERY function to group and sort data from 'data_range' where column C is greater than 10."
        },
        {
            "command": "=filter(a1:a10, len(a1:a10) > 5)",
            "description": "Filters the range A1:A10 to include only values longer than 5 characters."
        },
        {
            "command": "=sequence(5, 2, 10, 3)",
            "description": "Generates a 5x2 array starting at 10 with an increment of 3."
        },
        {
            "command": "=mmult(array1, array2)",
            "description": "Performs matrix multiplication on 'array1' and 'array2'."
        },
        {
            "command": "=transpose(query(data_range, \"select a, b where c > 10\"))",
            "description": "Queries and transposes data from 'data_range' where column C is greater than 10."
        },
        {
            "command": "=sort(a1:a10, 1, true)",
            "description": "Sorts the range A1:A10 in ascending order."
        },
        {
            "command": "=sortn(data_range, 5, 0, b1:b10, false)",
            "description": "Sorts 'data_range' by the values in B1:B10 and returns the top 5 rows."
        },
        {
            "command": "=sumproduct(a1:a10, b1:b10)",
            "description": "Calculates the sum of the products of corresponding values in A1:A10 and B1:B10."
        },
        {
            "command": "=row(a1)",
            "description": "Returns the row number of cell A1."
        },
        {
            "command": "=column(b2)",
            "description": "Returns the column number of cell B2."
        },
        {
            "command": "=sequence(3, 3, 1, 2)",
            "description": "Creates a 3x3 matrix starting at 1 with an increment of 2."
        },
        {
            "command": "=isnumber(search(\"abc\", a1))",
            "description": "Checks if the text 'abc' is found within cell A1 and returns TRUE or FALSE."
        },
        {
            "command": "=filter(a1:c10, b1:b10 > 100, c1:c10 = \"active\")",
            "description": "Filters rows from A1:C10 where column B is greater than 100 and column C is 'active'."
        },
        {
            "command": "=randbetween(1, 100)",
            "description": "Generates a random integer between 1 and 100."
        },
        {
            "command": "=rank(50, a1:a10, 0)",
            "description": "Finds the rank of 50 in the range A1:A10, with 0 indicating descending order."
        },
        {
            "command": "=year(today())",
            "description": "Extracts the current year from today's date."
        },
        {
            "command": "=month(today())",
            "description": "Extracts the current month from today's date."
        },
        {
            "command": "=day(today())",
            "description": "Extracts the current day from today's date."
        },
        {
            "command": "=weekday(today())",
            "description": "Returns the day of the week as a number for today's date."
        },
        {
            "command": "=eomonth(start_date, 1)",
            "description": "Returns the last day of the month one month after 'start_date'."
        },
        {
            "command": "=datedif(start_date, end_date, \"d\")",
            "description": "Calculates the number of days between 'start_date' and 'end_date'."
        },
        {
            "command": "=workday(start_date, 15)",
            "description": "Returns the date that is 15 working days after 'start_date'."
        },
        {
            "command": "=choosecols(data_range, 1, 3)",
            "description": "Selects the first and third columns from 'data_range'."
        },
        {
            "command": "=chooselabels(data_range, \"Region\")",
            "description": "Labels the first column of 'data_range' as 'Region'."
        },
        {
            "command": "=arrayformula(sum(a1:a10 * b1:b10))",
            "description": "Applies an array formula to calculate the sum of products of corresponding values in A1:A10 and B1:B10."
        }
    ],
    "excel_key_concepts": [
        {
            "command": "understanding the difference between relative and absolute cell references",
            "description": "Relative references adjust when copied (e.g., A1), while absolute references (e.g., $A$1) stay fixed, which is critical for consistent calculations across datasets."
        },
        {
            "command": "using the autofill feature to quickly populate series and patterns",
            "description": "Autofill saves time by automatically completing sequences (e.g., dates, numbers) or repeating patterns, improving data entry efficiency."
        },
        {
            "command": "leveraging conditional formatting to highlight important data",
            "description": "Conditional formatting visually emphasizes trends or anomalies (e.g., highlighting cells above a threshold), making key insights stand out."
        },
        {
            "command": "organizing data into tables for better management",
            "description": "Tables provide structured formatting, automatic filtering, and dynamic ranges, simplifying data manipulation and analysis."
        },
        {
            "command": "creating dynamic named ranges with the offset function",
            "description": "Dynamic named ranges automatically adjust as data expands, ensuring formulas always reference the correct cells."
        },
        {
            "command": "understanding pivot tables for summarizing data",
            "description": "Pivot tables allow for quick aggregation and analysis of large datasets, helping uncover trends and insights with minimal effort."
        },
        {
            "command": "using data validation to control input",
            "description": "Data validation enforces rules (e.g., dropdown lists, ranges) for user input, ensuring data integrity and consistency."
        },
        {
            "command": "splitting and combining text using text functions",
            "description": "Functions like LEFT, RIGHT, MID, and CONCATENATE simplify breaking apart or joining text strings, crucial for data cleanup and reorganization."
        },
        {
            "command": "utilizing the find and replace tool for bulk edits",
            "description": "Find and Replace streamlines mass updates, like replacing outdated terms across a spreadsheet, saving significant manual effort."
        },
        {
            "command": "applying filters to focus on specific data",
            "description": "Filters hide irrelevant rows, enabling users to work with just the data needed for targeted analysis."
        },
        {
            "command": "understanding how array formulas work",
            "description": "Array formulas perform operations on multiple values simultaneously, enabling advanced calculations with fewer formulas."
        },
        {
            "command": "using the trim function to remove extra spaces",
            "description": "TRIM eliminates leading, trailing, and excess spaces, ensuring clean and uniform text for accurate processing."
        },
        {
            "command": "mastering the use of the if function for logical operations",
            "description": "The IF function provides conditional outputs, enabling dynamic results based on logical criteria, essential for decision-making tasks."
        },
        {
            "command": "understanding the importance of cell formatting",
            "description": "Proper formatting (e.g., currency, percentages) ensures data is presented clearly, improving comprehension and professionalism."
        },
        {
            "command": "learning how to group and ungroup rows or columns",
            "description": "Grouping organizes data hierarchically, making large datasets easier to navigate and analyze."
        },
        {
            "command": "understanding the benefits of using keyboard shortcuts",
            "description": "Shortcuts enhance productivity by reducing the need for repetitive mouse actions, streamlining workflow."
        },
        {
            "command": "applying freeze panes to keep headers visible",
            "description": "Freeze Panes lock rows or columns in place, ensuring headers remain visible while scrolling through data, improving usability."
        },
        {
            "command": "understanding the power of lookup functions",
            "description": "Lookup functions like VLOOKUP and XLOOKUP efficiently retrieve data from tables, reducing manual search efforts."
        },
        {
            "command": "using charts to visualize data trends",
            "description": "Charts provide visual insights into data trends and comparisons, making complex information easier to understand."
        },
        {
            "command": "protecting worksheets to prevent accidental changes",
            "description": "Sheet protection secures critical data, ensuring accidental edits do not compromise the integrity of the information."
        },
        {
            "command": "automating repetitive tasks with macros",
            "description": "Macros save time by automating repetitive tasks, improving efficiency for complex or recurring operations."
        },
        {
            "command": "understanding the use of the sumif and countif functions",
            "description": "SUMIF and COUNTIF simplify conditional summation and counting, making data analysis more targeted and meaningful."
        },
        {
            "command": "splitting text into columns using text to columns",
            "description": "Text to Columns splits data based on delimiters, useful for reorganizing combined fields like names or addresses."
        },
        {
            "command": "using the power query for advanced data transformation",
            "description": "Power Query enables complex data cleaning, reshaping, and merging from multiple sources, streamlining workflows."
        },
        {
            "command": "understanding the difference between find and search",
            "description": "FIND is case-sensitive, while SEARCH is not, allowing for precise or flexible string location searches."
        },
        {
            "command": "leveraging index-match for flexible lookups",
            "description": "INDEX-MATCH is more versatile than VLOOKUP, enabling lookups in any direction and avoiding column dependency issues."
        },
        {
            "command": "understanding the use of slicers for filtering pivot tables",
            "description": "Slicers provide an interactive way to filter pivot table data, enhancing user experience and analysis clarity."
        },
        {
            "command": "creating dependent dropdown lists with data validation",
            "description": "Dependent dropdowns ensure valid choices based on previous selections, improving data entry accuracy and user experience."
        },
        {
            "command": "understanding how to use scenario manager",
            "description": "Scenario Manager allows users to explore different data scenarios, enabling better decision-making and what-if analysis."
        },
        {
            "command": "applying the choose function for conditional outputs",
            "description": "CHOOSE selects a value from a list based on a given index, simplifying multi-option conditions in formulas."
        },
        {
            "command": "understanding the use of the transpose function",
            "description": "TRANSPOSE switches rows and columns, useful for reorganizing data layouts efficiently."
        },
        {
            "command": "using sparklines to create in-cell data visualizations",
            "description": "Sparklines provide compact, in-cell visualizations of trends, making small data sets easier to interpret."
        },
        {
            "command": "understanding the difference between round, roundup, and rounddown",
            "description": "ROUND adjusts numbers to the nearest value, ROUNDUP always rounds up, and ROUNDDOWN always rounds down, ensuring precision where needed."
        },
        {
            "command": "applying goal seek to solve for unknowns",
            "description": "Goal Seek finds the input value required to achieve a desired result, simplifying complex calculations."
        },
        {
            "command": "understanding how to use the choosecols function",
            "description": "CHOOSECOLS extracts specific columns from a range, ideal for selective data analysis or report creation."
        },
        {
            "command": "understanding the benefits of array formulas",
            "description": "Array formulas perform calculations across multiple values, reducing the need for helper columns and improving efficiency."
        },
        {
            "command": "learning how to audit formulas with trace precedents",
            "description": "Trace Precedents visually tracks which cells influence a formula, making debugging and auditing easier."
        },
        {
            "command": "understanding the use of the indirect function",
            "description": "INDIRECT dynamically references cells or ranges, enabling flexible and adaptable formulas."
        },
        {
            "command": "creating dropdown lists for better data entry",
            "description": "Dropdowns ensure consistent and error-free data entry, simplifying analysis and maintaining integrity."
        },
        {
            "command": "using the randbetween function for random number generation",
            "description": "RANDBETWEEN generates random integers within a specified range, useful for simulations or randomized testing."
        },
        {
            "command": "understanding how to use subtotal for selective calculations",
            "description": "SUBTOTAL performs calculations (e.g., sum, average) on visible data only, ideal for filtered datasets."
        },
        {
            "command": "mastering the use of concatenate and textjoin",
            "description": "TEXTJOIN offers greater flexibility than CONCATENATE, allowing delimiters and ignoring empty cells, streamlining text aggregation."
        },
        {
            "command": "applying the unique function to extract distinct values",
            "description": "UNIQUE simplifies extracting distinct entries from a range, reducing the need for complex filtering."
        },
        {
            "command": "learning how to link data across worksheets",
            "description": "Linking data ensures consistency and updates between worksheets, ideal for multi-sheet workbooks."
        },
        {
            "command": "using the edate function for date calculations",
            "description": "EDATE adjusts dates by adding or subtracting months, useful for scheduling and project management."
        },
        {
            "command": "understanding the benefits of using helper columns",
            "description": "Helper columns simplify complex formulas and improve readability, serving as an intermediate step for calculations."
        },
        {
            "command": "understanding the difference between isblank and countblank",
            "description": "ISBLANK checks if a single cell is empty, while COUNTBLANK counts the number of empty cells in a range."
        },
        {
            "command": "learning how to use flash fill for pattern recognition",
            "description": "Flash Fill automatically detects patterns and fills data accordingly, saving time during repetitive tasks."
        }
    ],




  // You can add more categories and commands here
};
