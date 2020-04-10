import os
import csv

with open("components.csv","r") as f:
	content = csv.reader(f)
	for line in content:
		open(line[0]+".html","w") 