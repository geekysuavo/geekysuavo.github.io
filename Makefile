
EQUATIONS=  gpufield/01 gpufield/02 gpufield/03
EQUATIONS+= gpufield/04 gpufield/05 gpufield/06

PNG=$(addsuffix .png,$(EQUATIONS))

.SUFFIXES: .tex .png

all: _site

_site: $(PNG)
	jekyll build

.tex.png:
	pdflatex -output-directory $(dir $^) $^
	convert -density 120 -quality 95 $(^:.tex=.pdf) $@
	rm $(^:.tex=.aux) $(^:.tex=.log) $(^:.tex=.pdf)

clean:
	jekyll clean
	rm -f $(PNG)

again: clean all

