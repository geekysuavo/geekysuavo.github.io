
EQ=  gpufield/01 gpufield/02 gpufield/03
EQ+= gpufield/04 gpufield/05 gpufield/06

EQ+= orbitals/01 orbitals/02 orbitals/03
EQ+= orbitals/04 orbitals/05 orbitals/06

EQ+= bezier/01

EQ+= ppm/01 ppm/02

EQ+= camera/01 camera/02 camera/03 camera/04
EQ+= camera/05 camera/06 camera/07

EQ+= nusutils/01

PNG=$(addsuffix .png,$(EQ))

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

