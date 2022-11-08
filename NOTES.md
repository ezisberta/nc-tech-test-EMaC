Please add any additional notes here…

1 - Nodemon threw this error: "Error: listen EADDRINUSE: address already in use :::7000", fixed by changing port.

2 - Both cards.json and sizes.json have the same code, changed sizes to what seems to be a more accurate version considering the expected response objects.

3 - Created test_data to safeguard main data when running tests

4 - (expected sizes for card003 on README don't match data, wrote tests according to data)

5 - I managed to find a way to change the data but struggled to incorporate a non relational database, therefore I decided to require the json files directly to be able to at least read the data and build tests. I also tried using the file system (fs) but couldn't get it to read the right paths through express.

6 - My next step would be to build tests for Post errors, for when the request lacks data or has it in the wrong format, also for when it has sizes that are not part of the sizes file.
