PARALLEL_MOCHA=./node_modules/.bin/parallel-mocha

run_all_in_parallel:
	make -j test_XP_firefox_31 test_Windows7_chrome_40

test_XP_firefox_31:
	BROWSER=firefox VERSION="31" PLATFORM="XP" $(PARALLEL_MOCHA) tests/*.js

test_Windows7_chrome_40:
	BROWSER=chrome VERSION="40" PLATFORM="Windows 7" $(PARALLEL_MOCHA) tests/*.js
