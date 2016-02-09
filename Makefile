
.SUFFIXES: .tex .png

all: _site

_site:
	jekyll build

.tex.png:
	pdflatex $^
	convert -density 150 -quality 95 $(^:.tex=.pdf) $@
	rm $(^:.tex=.aux) $(^:.tex=.log) $(^:.tex=.pdf)

clean:
	jekyll clean

again: clean all

