
all: _site

_site:
	jekyll build

clean:
	jekyll clean

again: clean all

