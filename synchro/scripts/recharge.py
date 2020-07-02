from synchro.scripts.script_base import manager

@manager.command
def test():
  print "testing"

if __name__ == "__main__":
  manager.run()