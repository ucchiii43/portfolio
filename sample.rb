module Bar
  def bar
    'bar'
  end

  def baz
    'baz'
  end
end

class Sample
  include Bar

  @sample = 'sampleクラス'

  class << self
    def foo
      @sample + 'fooメソッド'
    end
  end

  def hoge
    bar + 'hogeメソッド'
  end
end
